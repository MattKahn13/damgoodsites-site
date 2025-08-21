import { Phone, Eye, Rocket } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Quick Zoom Call",
      description: "We talk for 20 minutes so I understand your business",
      color: "bg-blue-700", // Brand blue
    },
    {
      number: "2",
      icon: Eye,
      title: "Same-Day Mockup",
      description: "You get a preview within 24 hours",
      color: "bg-orange-400", // Brand orange
    },
    {
      number: "3",
      icon: Rocket,
      title: "Live Site",
      description: "We launch, host, and keep it running",
      color: "bg-teal-600", // Brand teal
    },
  ]

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 shadow-none">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600">Simple process, fast results</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
