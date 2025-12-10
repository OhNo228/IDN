/*
  # Strategic Digital Consultant — Initial Database Schema

  ## Overview
  Complete database schema for the Strategic Digital Consultant platform.
  Includes tables for users, sessions, agents, reports, scenarios, documents, and audit logs.

  ## Tables Created

  ### 1. users
  Extends Supabase auth.users with additional profile information
  - id (uuid, references auth.users)
  - email, name, company, role
  - plan (starter, team, enterprise)
  - retention_days (data retention policy)

  ### 2. sessions
  Stores strategic consultation sessions
  - user_id, question, context
  - status (created, processing, completed, failed)
  - progress, confidence
  - timestamps

  ### 3. agent_outputs
  Stores individual agent results for each session
  - session_id, agent_name, status
  - input, output, confidence
  - timestamps, error

  ### 4. reports
  Final reports generated for sessions
  - session_id
  - executive_summary, detailed_findings
  - assumptions, sources, next_steps
  - confidence

  ### 5. scenarios
  Alternative scenarios created by users
  - session_id, name
  - variables, results (JSON)

  ### 6. documents
  User-uploaded documents (without vector embeddings for MVP)
  - user_id, session_id
  - filename, file_type, storage_path
  - metadata, content_text

  ### 7. audit_log
  Complete audit trail of user actions
  - user_id, session_id, action
  - details, ip_address, user_agent

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Policies ensure users can only access their own data
  - Service role required for admin operations

  ## Notes
  - pgvector extension will be added in production deployment
  - For MVP, documents use full-text search instead of vector similarity
*/

-- =====================================================
-- TABLE: users (profile extension)
-- =====================================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  company TEXT,
  role TEXT,
  plan TEXT DEFAULT 'starter' CHECK (plan IN ('starter', 'team', 'enterprise')),
  retention_days INTEGER DEFAULT 30,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_plan ON users(plan);

-- =====================================================
-- TABLE: sessions
-- =====================================================

CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  question TEXT NOT NULL,
  context JSONB DEFAULT '{}',
  status TEXT DEFAULT 'created' CHECK (status IN ('created', 'processing', 'completed', 'failed')),
  progress NUMERIC DEFAULT 0 CHECK (progress >= 0 AND progress <= 1),
  confidence NUMERIC CHECK (confidence >= 0 AND confidence <= 1),
  created_at TIMESTAMPTZ DEFAULT now(),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ
);

ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON sessions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create sessions"
  ON sessions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own sessions"
  ON sessions FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own sessions"
  ON sessions FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Indexes
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_status ON sessions(status);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at DESC);

-- =====================================================
-- TABLE: agent_outputs
-- =====================================================

CREATE TABLE IF NOT EXISTS agent_outputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
  agent_name TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'success', 'partial', 'failed')),
  input JSONB DEFAULT '{}',
  output JSONB DEFAULT '{}',
  confidence NUMERIC CHECK (confidence >= 0 AND confidence <= 1),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  error TEXT
);

ALTER TABLE agent_outputs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view outputs of own sessions"
  ON agent_outputs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = agent_outputs.session_id
      AND sessions.user_id = auth.uid()
    )
  );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_agent_outputs_session_id ON agent_outputs(session_id);
CREATE INDEX IF NOT EXISTS idx_agent_outputs_agent_name ON agent_outputs(agent_name);
CREATE INDEX IF NOT EXISTS idx_agent_outputs_status ON agent_outputs(status);

-- =====================================================
-- TABLE: reports
-- =====================================================

CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE NOT NULL UNIQUE,
  executive_summary TEXT,
  detailed_findings JSONB DEFAULT '{}',
  assumptions TEXT[] DEFAULT '{}',
  sources JSONB DEFAULT '[]',
  next_steps TEXT[] DEFAULT '{}',
  confidence NUMERIC CHECK (confidence >= 0 AND confidence <= 1),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view reports of own sessions"
  ON reports FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = reports.session_id
      AND sessions.user_id = auth.uid()
    )
  );

CREATE POLICY "System can create reports"
  ON reports FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = reports.session_id
      AND sessions.user_id = auth.uid()
    )
  );

-- Index
CREATE INDEX IF NOT EXISTS idx_reports_session_id ON reports(session_id);

-- =====================================================
-- TABLE: scenarios
-- =====================================================

CREATE TABLE IF NOT EXISTS scenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  variables JSONB DEFAULT '{}',
  results JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage scenarios of own sessions"
  ON scenarios FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = scenarios.session_id
      AND sessions.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM sessions
      WHERE sessions.id = scenarios.session_id
      AND sessions.user_id = auth.uid()
    )
  );

-- Index
CREATE INDEX IF NOT EXISTS idx_scenarios_session_id ON scenarios(session_id);

-- =====================================================
-- TABLE: documents (without vector embeddings for MVP)
-- =====================================================

CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  file_type TEXT,
  file_size INTEGER,
  storage_path TEXT NOT NULL,
  content_text TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own documents"
  ON documents FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Indexes
CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_session_id ON documents(session_id);

-- Full-text search index (alternative to vector search for MVP)
CREATE INDEX IF NOT EXISTS idx_documents_content_text ON documents USING gin(to_tsvector('english', content_text));

-- =====================================================
-- TABLE: audit_log
-- =====================================================

CREATE TABLE IF NOT EXISTS audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  session_id UUID REFERENCES sessions(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  details JSONB DEFAULT '{}',
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own audit log"
  ON audit_log FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Indexes
CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_session_id ON audit_log(session_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_action ON audit_log(action);

-- =====================================================
-- FUNCTION: search_documents (full-text search)
-- =====================================================

CREATE OR REPLACE FUNCTION search_documents (
  search_query text,
  user_id_filter uuid DEFAULT NULL,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  filename text,
  content_text text,
  metadata jsonb,
  relevance float
)
LANGUAGE plpgsql STABLE
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.filename,
    documents.content_text,
    documents.metadata,
    ts_rank(to_tsvector('english', documents.content_text), plainto_tsquery('english', search_query)) AS relevance
  FROM documents
  WHERE (user_id_filter IS NULL OR documents.user_id = user_id_filter)
    AND to_tsvector('english', documents.content_text) @@ plainto_tsquery('english', search_query)
  ORDER BY relevance DESC
  LIMIT match_count;
END;
$$;

-- =====================================================
-- TRIGGER: Update updated_at timestamp
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();