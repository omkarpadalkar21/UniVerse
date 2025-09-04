import Layout from "../../components/layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  const projects = [
    {
      title: "CRYPTO EXCHANGE",
      category: "WEB DESIGN",
      year: "2024",
      description: "BOLD TRADING PLATFORM THAT MAKES CRYPTO ACCESSIBLE TO EVERYONE",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-yellow-400",
      tags: ["REACT", "TYPESCRIPT", "DESIGN SYSTEM"],
    },
    {
      title: "FASHION BRAND",
      category: "BRANDING",
      year: "2024",
      description: "COMPLETE BRAND IDENTITY FOR STREETWEAR COMPANY",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-pink-500",
      tags: ["BRANDING", "E-COMMERCE", "PHOTOGRAPHY"],
    },
    {
      title: "TECH STARTUP",
      category: "DEVELOPMENT",
      year: "2023",
      description: "FULL-STACK APPLICATION FOR AI-POWERED ANALYTICS",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-cyan-400",
      tags: ["NEXT.JS", "AI", "ANALYTICS"],
    },
    {
      title: "RESTAURANT CHAIN",
      category: "WEB DESIGN",
      year: "2023",
      description: "ORDERING SYSTEM THAT INCREASED SALES BY 300%",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-yellow-400",
      tags: ["UX/UI", "MOBILE", "ORDERING"],
    },
    {
      title: "MUSIC FESTIVAL",
      category: "BRANDING",
      year: "2023",
      description: "EVENT BRANDING THAT SOLD OUT IN 24 HOURS",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-pink-500",
      tags: ["EVENT", "TICKETS", "SOCIAL"],
    },
    {
      title: "FINTECH APP",
      category: "DEVELOPMENT",
      year: "2023",
      description: "BANKING APP TRUSTED BY 100K+ USERS",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-cyan-400",
      tags: ["FINTECH", "SECURITY", "MOBILE"],
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-8">
            OUR <span className="text-yellow-400">BRUTAL</span> WORK
          </h1>
          <p className="text-xl font-bold max-w-3xl mx-auto">
            PROJECTS THAT DON'T JUST LOOK GOOD - THEY DOMINATE THEIR MARKETS AND CRUSH THE COMPETITION.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-yellow-400 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["ALL", "WEB DESIGN", "DEVELOPMENT", "BRANDING"].map((filter) => (
              <Button
                key={filter}
                className="bg-black text-white border-4 border-black hover:bg-white hover:text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${project.color} border-2 border-black px-3 py-1`}>
                    <span className="font-black uppercase text-xs">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-bold text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-3">{project.title}</h3>
                  <p className="font-bold mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-200 border-2 border-black px-2 py-1 text-xs font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-black text-white border-4 border-black hover:bg-yellow-400 hover:text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    VIEW PROJECT
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-500 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-5xl font-black uppercase mb-8 text-white">
            READY FOR YOUR
            <br />
            <span className="text-black">BRUTAL PROJECT?</span>
          </h2>
          <Link href="/contact">
            <Button className="bg-black text-white border-4 border-black hover:bg-white hover:text-black font-black uppercase text-xl px-12 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              START YOUR PROJECT
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
