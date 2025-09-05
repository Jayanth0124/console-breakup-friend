import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

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
        <div className={`relative mb-8 transform transition-all duration-2000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative w-32 h-32 mx-auto">
            {/* Heart crack effect */}
            <div className="absolute inset-0 heart-crack-animation">
              <Heart 
                size={128} 
                className="text-pink-300 heart-glow animate-pulse"
                fill="currentColor"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-20 bg-purple-200 crack-line rotate-12"></div>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 heart-glow-outer animate-pulse opacity-50">
              <Heart 
                size={140} 
                className="text-pink-200"
                fill="currentColor"
              />
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`transform transition-all duration-2000 delay-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed">
            Even broken hearts
          </h1>
          <h2 className="text-xl md:text-2xl font-extralight text-pink-200 mb-8">
            can shine again ✨
          </h2>
          
          <p className="text-sm md:text-base text-purple-200 leading-relaxed opacity-80">
            Your journey of healing begins here. Every crack in your heart is where the light gets in.
          </p>
        </div>

        {/* Breathing indicator */}
        <div className={`mt-12 transform transition-all duration-2000 delay-2000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="breathing-circle mx-auto w-4 h-4 rounded-full bg-pink-300 opacity-60"></div>
          <p className="text-xs text-purple-300 mt-2">Breathe and swipe to continue</p>
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
    </div>
  );
};

export default Page1BrokenHeart;