import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple Pricing, No Surprises</h1>
            <p className="text-xl text-slate-600 mb-12">
              One package, one price. Everything you need to get online and start getting more customers.
            </p>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-orange-400 shadow-lg">
              <CardHeader className="text-center bg-orange-400 text-white">
                <CardTitle className="text-3xl font-bold">Starter Package</CardTitle>
                <div className="text-5xl font-bold mt-4">$299</div>
                <p className="text-orange-100 mt-2">Everything you need to get started</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>One-page professional website</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Mobile-optimized design</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Delivered within 48 hours</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Hosting included for 3 months</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Contact form setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>Basic SEO optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span>One month of minor revisions</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-400 hover:bg-orange-500 text-white" size="lg">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hosting Info */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-600">
              <strong>Hosting renews at $10/month after the included 3-month period.</strong>
              <br />
              Cancel anytime, no contracts, no hassle.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to upgrade your website?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's get you online with a site that actually brings in customers.
            </p>
            <Button asChild size="lg" className="bg-orange-400 hover:bg-orange-500 text-white">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
