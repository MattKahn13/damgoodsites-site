"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    currentWebsite: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Your Free Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              name="businessName"
              type="text"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="currentWebsite">Current Website (optional)</Label>
            <Input
              id="currentWebsite"
              name="currentWebsite"
              type="url"
              value={formData.currentWebsite}
              onChange={handleChange}
              className="mt-1"
              placeholder="https://yoursite.com"
            />
          </div>

          <div>
            <Label htmlFor="description">Tell me about your business and what you need</Label>
            <Textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="mt-1"
              placeholder="What kind of business do you run? What's your biggest challenge with your current website?"
            />
          </div>

          <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white" size="lg">
            Request My Free Call
          </Button>
        </form>

        <p className="text-center text-slate-600 mt-6">
          <strong>I'll respond within 24 hours</strong> to schedule a Zoom call and get things rolling.
        </p>
      </CardContent>
    </Card>
  )
}
