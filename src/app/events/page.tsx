import Image from "next/image"
import Header from "../header"

export default function EventsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      
      <div className="relative py-16 px-4">
        <div className="container mx-auto">
          
        {/* MVEEF Logo */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <img 
            src="/MVEEF.png" 
            alt="MVEEF" 
            className="w-auto h-24 sm:h-32 md:h-48 lg:h-64 mx-auto object-contain"
          />
        </div>

          {/* Event Flyer mejorado */}
          <div className="mb-16">
            <div className="relative group max-w-5xl mx-auto">
              {/* Gradiente de fondo animado */}
              <div className="absolute inset-0 bg-header-gradient opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-700"></div>
              
              {/* Contenedor principal con doble borde */}
              <div className="relative">
                <div className="absolute inset-0 bg-header-gradient p-1 rounded-3xl">
                  <div className="bg-black rounded-3xl h-full"></div>
                </div>
                
                <div className="relative bg-black/90 rounded-3xl p-8 md:p-12 m-1">
                  <Image
                    src="/MVEEFTOURMUNDIAL.png"
                    alt="MVEEF Tour Mundial"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Botón centrado */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <a href="https://distrokid.com/hyperfollow/pinedacntryblackdollar/mveef" target="_blank" rel="noopener noreferrer">
              <button className="relative group px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-black text-black bg-vibrant-gradient rounded-full hover:scale-105 transition-all duration-300 shadow-2xl">
                <span className="relative z-10">OUT NOW!</span>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>
          </div>
          
                 
      </div>
    </div>
  </div>
  )
}