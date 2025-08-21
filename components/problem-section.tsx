import { Smartphone, Turtle, Search, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ProblemSection() {
  const problems = [
    {
      icon: Smartphone,
      title: "Sketchy on mobile",
      description: "Your site looks broken on phones, and that's where your customers are.",
    },
    {
      icon: Turtle,
      title: "Loads slower than a tortoise",
      description: "Customers bounce before your page even loads. Speed matters.",
    },
    {
      icon: Search,
      title: "Invisible on Google",
      description: "If Google can't find you, neither can your customers.",
    },
    {
      icon: Calendar,
      title: "Looks like it was made in 2010",
      description: "Outdated design makes customers question if you're still in business.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Signs Your Site's Leaking Customers</h2>
          <p className="text-xl text-slate-600">Don't let these problems cost you business</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
