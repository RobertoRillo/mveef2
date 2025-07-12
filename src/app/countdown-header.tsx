"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownHeader() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  // Fecha objetivo: 24 de julio del 2025 a las 00:00:00
  const targetDate = new Date('2025-07-25T00:00:00').getTime()

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
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-header-gradient opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl md:text-3xl font-black text-black drop-shadow-lg"> </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
                HOME
              </a>
              <a href="#" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
                EVENTS
              </a>
              <a href="#" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
                TICKETS
              </a>
              <a href="#" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
                
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          {/* MVEEF Logo */}
          <div className="mb-12">
            <img 
              src="/MVEEF.png" 
              alt="MVEEF" 
              className="w-auto h-32 md:h-48 lg:h-64 mx-auto object-contain"
            />
          </div>

          {/* Event Date Info */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-neon-green mb-2">
              COMING JULY 25, 2025
            </h2>
            <p className="text-lg md:text-xl text-white/80">
            </p>
          </div>

          {/* Countdown Section */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 md:space-x-8 flex-wrap gap-4">
              <div className="text-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-countdown-gradient rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] border border-neon-green/30">
                    <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                      {formatNumber(timeLeft.days)}
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-base text-neon-green font-bold mt-3 tracking-wider">DAYS</div>
              </div>

              <div className="text-3xl md:text-5xl text-electric-yellow font-black animate-pulse">:</div>

              <div className="text-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-countdown-gradient rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] border border-electric-yellow/30">
                    <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                      {formatNumber(timeLeft.hours)}
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-base text-electric-yellow font-bold mt-3 tracking-wider">HOURS</div>
              </div>

              <div className="text-3xl md:text-5xl text-vibrant-orange font-black animate-pulse">:</div>

              <div className="text-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-countdown-gradient rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] border border-vibrant-orange/30">
                    <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                      {formatNumber(timeLeft.minutes)}
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-base text-vibrant-orange font-bold mt-3 tracking-wider">MINUTES</div>
              </div>

              <div className="text-3xl md:text-5xl text-hot-pink font-black animate-pulse">:</div>

              <div className="text-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-countdown-gradient rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[120px] border border-hot-pink/30">
                    <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
                      {formatNumber(timeLeft.seconds)}
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-base text-hot-pink font-bold mt-3 tracking-wider">SECONDS</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="mt-12">
            <button className="relative group px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-black text-black bg-vibrant-gradient rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10">GET TICKETS NOW</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div> */}
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-electric-yellow/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  )
}