import React, { useEffect, useState } from 'react';

const Page1BrokenHeart = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-md mx-auto">
        {/* 3D Broken Heart */}
        <div className={`relative mb-8 w-40 h-40 mx-auto transition-all duration-2000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-50">
            <div 
              className="w-[110%] h-[110%] bg-pink-200"
              style={{
                maskImage: 'url(/heart.svg)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                filter: 'blur(10px)'
              }}
            />
          </div>
          
          {/* Heart halves container */}
          <div className="absolute inset-0">
            {/* Left Half */}
            <div className={`absolute inset-0 transition-transform duration-1500 ease-out ${isAnimating ? 'transform -translate-x-3 -rotate-2' : ''}`}>
              <div 
                className="w-full h-full bg-pink-300 heart-glow"
                style={{
                  maskImage: 'url(/heart.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: 'url(/heart.svg)', // For Safari compatibility
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  clipPath: 'polygon(0 0, 51% 0, 51% 100%, 0% 100%)'
                }}
              />
            </div>
            
            {/* Right Half */}
            <div className={`absolute inset-0 transition-transform duration-1500 ease-out ${isAnimating ? 'transform translate-x-3 rotate-2' : ''}`}>
              <div
                className="w-full h-full bg-pink-300 heart-glow"
                style={{
                  maskImage: 'url(/heart.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: 'url(/heart.svg)', // For Safari compatibility
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  clipPath: 'polygon(49% 0, 100% 0, 100% 100%, 49% 100%)'
                }}
              />
            </div>
          </div>
          
          {/* The jagged crack line SVG has been removed from here */}
        </div>

        {/* Quote */}
        <div className={`transform transition-all duration-2000 delay-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed">
            Even broken hearts
          </h1>
          <h2 className="text-xl md:text-2xl font-extralight text-pink-200 mb-8">
            can shine again Dear INDU✨
          </h2>
          
          <p className="text-sm md:text-base text-purple-200 leading-relaxed opacity-80">
            Your journey of healing begins here. Every crack in your heart is where the light gets in.
          </p>
        </div>

        {/* Breathing indicator */}
        <div className={`mt-12 transform transition-all duration-2000 delay-2000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="breathing-circle mx-auto w-4 h-4 rounded-full bg-pink-300 opacity-60"></div>
          <p className="text-xs text-purple-300 mt-2">Breathe and click next to continue</p>
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
    </div>
  );
};

export default Page1BrokenHeart;