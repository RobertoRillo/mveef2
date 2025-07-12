"use client"

import Image from "next/image"

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-header-gradient opacity-90"></div>
      <div className="relative z-10 container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo a la izquierda */}
          <div>
            <Image
              src="/logomveef.png"
              alt="MVEEF Logo"
              width={120}
              height={120}
              className="w-auto h-12 md:h-16 object-contain"
              priority
            />
          </div>
          
          {/* Navegación a la derecha */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
              HOME
            </a>
            <a href="/" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
              EVENTS
            </a>
            <a href="" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
              TICKETS
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}