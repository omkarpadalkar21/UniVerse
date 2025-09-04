import Layout from "../components/layout"
import Link from "next/link"
import { CalendarDays, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import FeaturedEventsSlider from "@/components/landing/featured-events"
import NewsletterForm from "@/components/landing/newsletter-form"

type FeaturedEvent = {
  id: string
  title: string
  club: string
  date: string
  location: string
  capacity: number
  remaining: number
  cover?: string
}

const featuredEvents: FeaturedEvent[] = [
  {
    id: "hack-101",
    title: "Hack Night 101",
    club: "CS Society",
    date: "Fri, Oct 3 · 6:00 PM",
    location: "Innovation Hub",
    capacity: 120,
    remaining: 18,
    cover: "/hackathon-cover.jpg",
  },
  {
    id: "film-fest",
    title: "Indie Film Fest",
    club: "Cinema Club",
    date: "Sat, Oct 12 · 7:30 PM",
    location: "Auditorium B",
    capacity: 300,
    remaining: 72,
    cover: "/film-festival-cover.jpg",
  },
  {
    id: "ai-talk",
    title: "AI for Everyone",
    club: "IEEE Student Chapter",
    date: "Tue, Oct 22 · 5:00 PM",
    location: "Library Theater",
    capacity: 200,
    remaining: 9,
    cover: "/ai-talk-cover.jpg",
  },
  {
    id: "wellness",
    title: "Mindful Morning Yoga",
    club: "Wellness Collective",
    date: "Sun, Oct 27 · 8:00 AM",
    location: "North Lawn",
    capacity: 60,
    remaining: 21,
    cover: "/yoga-outdoor-cover.jpg",
  },
]

export default function HomePage() {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block bg-blue-500 text-white border-4 border-black rounded-2xl px-3 py-1 font-black uppercase tracking-tight shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-4">
                  UniVerse
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] uppercase mb-6">
                  Discover, Share, and Reserve
                  <br />
                  <span className="text-blue-600">Campus Events</span>
                </h1>
                <p className="text-lg md:text-xl font-bold max-w-xl mb-8">
                  Your hub for student life. Browse events, see details, and grab seats in seconds — all in one place.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/events" prefetch className="w-full sm:w-auto">
                    <Button
                      className={cn(
                        "w-full sm:w-auto bg-blue-600 text-white border-4 border-black font-black uppercase text-base md:text-lg px-6 md:px-8 py-5",
                        "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white",
                      )}
                    >
                      Explore Events
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/create-event" prefetch className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full sm:w-auto bg-white text-black border-4 border-black font-black uppercase text-base md:text-lg px-6 md:px-8 py-5",
                        "hover:bg-lime-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
                      )}
                    >
                      Create Event
                    </Button>
                  </Link>
                </div>

                {/* Stats strip */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { k: "Active Events", v: "128" },
                    { k: "Clubs", v: "56" },
                    { k: "Seats Reserved", v: "14k+" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="bg-white border-4 border-black rounded-2xl p-4 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="text-2xl md:text-3xl font-black">{s.v}</div>
                      <div className="text-xs md:text-sm font-bold uppercase">{s.k}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight card */}
              <div className="relative">
                <Card className="bg-lime-400 border-4 border-black rounded-3xl p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-1">
                  <div className="-rotate-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-black text-white border-4 border-black rounded-xl px-2 py-1 text-xs font-black uppercase">
                        Featured
                      </span>
                      <span className="inline-block bg-white text-black border-4 border-black rounded-xl px-2 py-1 text-xs font-black uppercase">
                        This Week
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-3">AI for Everyone</h3>
                    <ul className="space-y-2 font-bold">
                      <li className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5" aria-hidden="true" />
                        Tue, Oct 22 · 5:00 PM
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                        Library Theater
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5" aria-hidden="true" />
                        200 capacity · 9 left
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/events/ai-talk" prefetch>
                        <Button className="bg-black text-white border-4 border-black font-black uppercase px-6 py-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white border-4 border-black rounded-2xl px-4 py-2 font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  Uni
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured events slider */}
        <section aria-labelledby="featured-events" className="bg-black text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <h2 id="featured-events" className="text-4xl md:text-5xl font-black uppercase text-center mb-8">
              Featured <span className="text-lime-400">Events</span>
            </h2>
            <FeaturedEventsSlider events={featuredEvents} />
            <div className="mt-8 flex justify-center">
              <Link href="/events" prefetch>
                <Button
                  variant="outline"
                  className="bg-white text-black border-4 border-white hover:bg-lime-400 font-black uppercase px-6 py-5 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                >
                  Browse All
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              Never miss a <span className="text-blue-600">drop</span>
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 text-balance">
              Get a weekly digest of new events, seat releases, and campus highlights — straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
    </Layout>
  )
}
