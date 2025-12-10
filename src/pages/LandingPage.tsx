import Hero from '../components/landing/Hero';
import TrustBar from '../components/landing/TrustBar';
import ProblemStatement from '../components/landing/ProblemStatement';
import HowItWorks from '../components/landing/HowItWorks';
import AgentShowcase from '../components/landing/AgentShowcase';
import UseCases from '../components/landing/UseCases';
import SecurityTrust from '../components/landing/SecurityTrust';
import PricingTeaser from '../components/landing/PricingTeaser';
import CTAFinal from '../components/landing/CTAFinal';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <HowItWorks />
      <AgentShowcase />
      <UseCases />
      <SecurityTrust />
      <PricingTeaser />
      <CTAFinal />
      <Footer />
    </div>
  );
}
