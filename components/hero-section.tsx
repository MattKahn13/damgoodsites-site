"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Don't let your old site <span className="text-orange-400">leak customers.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              If your website looks 10 years old, customers won't trust you. We'll build you a better one — fast, clean,
              and affordable.
            </p>
            <Button
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-white text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              Get a Dam Good Site
            </Button>
          </div>
          <div className="flex justify-center flex-row">
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg w-[320]">
              <img
                src="/stock2.jpg"
                alt="Professional web design team collaborating on modern websites"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
