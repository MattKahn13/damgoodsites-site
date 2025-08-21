import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Rocket } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">You're busy. We build.</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              I started DamGoodSites to help small businesses get websites that work. You'll deal with one person, get
              one price, and have one less thing to worry about.
            </p>
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <img src="/logo.png" alt="DamGoodSites founder" className="w-40 h-auto object-contain" />
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Simple Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">1. Intro Call</h3>
                  <p className="text-slate-600">
                    We hop on a 20-minute call to understand your business and what you need.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">2. Design</h3>
                  <p className="text-slate-600">You get a mockup within 24 hours. We refine it until it's perfect.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">3. Launch</h3>
                  <p className="text-slate-600">
                    We build, launch, and host your site. You focus on running your business.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Can you redesign my current site?</h3>
                <p className="text-slate-600">
                  Absolutely. Whether you need a complete overhaul or just want to modernize what you have, we can work
                  with your existing content and improve from there.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Do I need to write my own content?</h3>
                <p className="text-slate-600">
                  You can if you want to, but we'll keep it simple. We can work with what you have or help you create
                  clear, effective copy that gets results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">What if I need changes after launch?</h3>
                <p className="text-slate-600">
                  Minor tweaks are included for the first month. Bigger changes can be handled quickly for a small
                  additional fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's build you a website that actually works for your business.
            </p>
            <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-500 text-white">
              <Link href="/contact">Get Your Free Call</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
