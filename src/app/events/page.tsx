import Image from "next/image"
import Header from "../header"

export default function EventsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      <div className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          {/* Event Flyer with optimized styling */}
          <div className="mb-12">
            <div className="relative group max-w-4xl mx-auto">
              {/* Subtle glow effect - less intensive than full blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-electric-yellow/20 to-hot-pink/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
              
              {/* Main container */}
              <div className="relative bg-black/85 rounded-3xl p-8 md:p-12 border border-neon-green/40 shadow-2xl">
                <Image
                  src="/flyerweb.png"
                  alt="Event Flyer"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Moderate background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/8 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-hot-pink/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-electric-yellow/6 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  )
}