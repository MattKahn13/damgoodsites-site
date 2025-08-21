import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Make Your Site Dam Good</h1>
            <p className="text-xl text-slate-600 mb-12">
              Ready to upgrade your website? Fill out the form below and I'll get back to you within 24 hours to
              schedule our call.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="font-bold text-slate-900 mb-2">I'll respond fast</h3>
                <p className="text-slate-600">You'll hear back from me within 24 hours to schedule our call.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Quick discovery call</h3>
                <p className="text-slate-600">We'll spend 20 minutes understanding your business and goals.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Get your mockup</h3>
                <p className="text-slate-600">Within 24 hours, you'll see exactly what your new site will look like.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
