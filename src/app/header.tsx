"use client"

import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              className="w-auto h-8 sm:h-10 md:h-16 object-contain"
              priority
            />
          </div>
          
          {/* Botón hamburguesa para móvil */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
          
          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
              HOME
            </a>
            <a href="/events" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
              EVENTS
            </a>
            <a href="" className="text-black font-bold hover:text-white transition-colors drop-shadow-md">
              TICKETS
            </a>
          </nav>
        </div>
        
        {/* Menú móvil desplegable */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mt-4 py-4 px-2">
            <div className="flex justify-center space-x-4">
              <a 
                href="/" 
                className="text-black font-bold hover:text-white transition-colors drop-shadow-md py-2 px-3 rounded-lg hover:bg-white/20 text-center flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a 
                href="/events" 
                className="text-black font-bold hover:text-white transition-colors drop-shadow-md py-2 px-3 rounded-lg hover:bg-white/20 text-center flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </a>
              <a 
                href="" 
                className="text-black font-bold hover:text-white transition-colors drop-shadow-md py-2 px-3 rounded-lg hover:bg-white/20 text-center flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                TICKETS
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}