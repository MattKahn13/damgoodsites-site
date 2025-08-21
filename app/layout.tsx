import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DamGoodSites - Fast, Affordable Websites for Blue-Collar Businesses",
  description:
    "Don't let your old site leak customers. We build professional websites for blue-collar businesses - fast, clean, and affordable.",
  keywords: "website design, small business websites, blue collar websites, affordable web design",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
