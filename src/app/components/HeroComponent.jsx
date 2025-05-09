import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calcular transformaciones basadas en scroll
  const imageTransform = `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0005})`;
  const textOpacity = 1 - scrollY * 0.003;
  const backgroundOpacity = scrollY * 0.001;

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Fondo con efecto parallax */}
      <div 
        className="absolute inset-0 bg-gray-100" 
        style={{ 
          opacity: backgroundOpacity,
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      />
      
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full mx-auto p-4 h-screen">
        <div 
          className="w-full md:w-1/2 px-4"
          style={{ 
            transform: `translateY(${scrollY * -0.1}px)`,
            opacity: textOpacity
          }}
        >
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4 transition-all duration-300">
            Hola! Soy Fernando Garza.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 transition-all duration-300">
             Software Developer based in Merida, Yucatan.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
            Contact
          </button>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <img 
            src="/Yeti.PNG" 
            alt="Fernando Garza - Yeti" 
            className="w-full max-w-md object-contain transition-all duration-300"
            style={{ 
              transform: imageTransform,
              filter: `blur(${scrollY * 0.01}px)`
            }}
          />
          
          {/* Elementos decorativos que reaccionan al scroll */}
          <div 
            className="absolute w-20 h-20 rounded-full bg-gray-200 -z-10 top-1/4 left-1/4"
            style={{ transform: `translateX(${-scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute w-16 h-16 rounded-full bg-gray-300 -z-10 bottom-1/4 right-1/4"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
          />
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 mb-2">Scroll para explorar</p>
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}