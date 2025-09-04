"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, CalendarDays, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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

export default function FeaturedEventsSlider({ events }: { events: FeaturedEvent[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  function scrollBy(delta: number) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: "smooth" })
  }

  return (
    <div className="relative" role="region" aria-label="Featured events carousel">
      <div
        ref={trackRef}
        className={cn(
          "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2",
          "scrollbar-thin scrollbar-thumb-black/60 scrollbar-track-transparent",
        )}
        tabIndex={0}
      >
        {events.map((ev) => (
          <Card
            key={ev.id}
            className={cn(
              "min-w-[280px] max-w-[320px] snap-start bg-white text-black",
              "border-4 border-white rounded-3xl p-3",
              "shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]",
            )}
          >
            <div className="relative mb-3">
              <Image
                src={ev.cover || "/placeholder.svg?height=160&width=280&query=event cover"}
                alt={`${ev.title} cover`}
                width={320}
                height={160}
                className="w-full h-40 object-cover border-4 border-black rounded-2xl"
              />
              <span className="absolute top-2 left-2 bg-lime-400 border-4 border-black rounded-xl px-2 py-1 text-xs font-black uppercase">
                {ev.club}
              </span>
            </div>
            <div className="px-1">
              <h3 className="text-lg font-black uppercase leading-tight mb-2">{ev.title}</h3>
              <ul className="text-sm font-bold space-y-1">
                <li className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {ev.date}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {ev.location}
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  {ev.capacity} cap · {ev.remaining} left
                </li>
              </ul>
              <div className="mt-3">
                <Link href={`/events/${ev.id}`} prefetch>
                  <Button className="w-full bg-blue-600 text-white border-4 border-black font-black uppercase py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white">
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <div className="pointer-events-auto pl-1">
          <Button
            aria-label="Previous"
            variant="outline"
            onClick={() => scrollBy(-320)}
            className="bg-white text-black border-4 border-white hover:bg-lime-400 font-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        <div className="pointer-events-auto pr-1">
          <Button
            aria-label="Next"
            variant="outline"
            onClick={() => scrollBy(320)}
            className="bg-white text-black border-4 border-white hover:bg-lime-400 font-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}
