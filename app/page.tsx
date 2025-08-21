import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutPreviewSection from "@/components/about-preview-section"
import CtaBanner from "@/components/cta-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <AboutPreviewSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
