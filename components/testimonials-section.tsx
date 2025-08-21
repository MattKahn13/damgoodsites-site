import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Didn't think I needed a new site — now I'm getting more calls than ever.",
      author: "Mike Rodriguez",
      business: "Rodriguez Roofing",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "I barely had to lift a finger. Best $299 I've spent.",
      author: "Sarah Chen",
      business: "Chen's Custom Cabinets",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Finally, a website that actually brings in customers instead of scaring them away.",
      author: "Tom Wilson",
      business: "Wilson HVAC",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-slate-600">Real results from real businesses</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 text-lg">"{testimonial.quote}"</blockquote>
                <div className="flex flex-row justify-start items-end">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-600">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
