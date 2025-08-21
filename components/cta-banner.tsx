"use client"

import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 px-4 bg-blue-700" id="contact-form">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't let your old site leak customers.</h2>
        <p className="text-xl text-blue-100 mb-8">Get a professional website that actually brings in business.</p>
        <Button
          size="lg"
          className="bg-orange-400 hover:bg-orange-500 text-white text-lg px-8 py-4"
          onClick={scrollToContact}
        >
          Request My Free Call
        </Button>
      </div>
    </section>
  )
}
