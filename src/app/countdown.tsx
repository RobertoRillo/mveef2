"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  // Fecha objetivo: 24 de julio del 2025 a las 00:00:00
  const targetDate = new Date('2025-07-26T00:00:00').getTime()

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  useEffect(() => {
    setMounted(true)
    
    // Calcular el tiempo inicial
    setTimeLeft(calculateTimeLeft())

    // Actualizar cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0")
  }

  // Evitar hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="relative py-8 px-4 sm:py-12 md:py-16">
      <div className="container mx-auto text-center">
        {/* MVEEF Logo */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <img 
            src="/MVEEF.png" 
            alt="MVEEF" 
            className="w-auto h-24 sm:h-32 md:h-48 lg:h-64 mx-auto object-contain"
          />
        </div>

        <iframe src="https://open.spotify.com/embed/track/1pGg5YWM0GmZqnqUV1g3gY?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        {/* CTA Button */}
        { <div className="mt-8 sm:mt-12">
          <a href="https://distrokid.com/hyperfollow/pinedacntryblackdollar/mveef" target="_blank" rel="noopener noreferrer">
            <button className="relative group px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-black text-black bg-vibrant-gradient rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10">OUT NOW!</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </div> }
      </div>

      {/* Background Effects - Responsive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-neon-green/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-hot-pink/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-electric-yellow/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  )
}