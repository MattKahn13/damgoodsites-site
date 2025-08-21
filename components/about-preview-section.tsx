import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPreviewSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">You're busy. We build.</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I started DamGoodSites to help small businesses get websites that work. You'll deal with one person, get
              one price, and have one less thing to worry about.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              No confusing jargon, no endless revisions, no surprise fees. Just a straightforward approach to getting
              you online and bringing in customers.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg flex items-center justify-center shadow-lg">
              <img src="/logo.png" alt="About DamGoodSites" className="w-64 h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
