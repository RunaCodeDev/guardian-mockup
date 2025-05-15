import type React from "react"
import Header from "./header"
import Footer from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <main className="flex-grow">
        <div className="relative py-16 border-b border-gray-800">
          <div
            className="absolute inset-0 z-0 opacity-25"
            style={{
              backgroundImage: "url(/images/security-pattern-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  )
}
