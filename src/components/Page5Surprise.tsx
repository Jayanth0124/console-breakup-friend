import React, { useState, useEffect } from 'react';
import { DoorOpen as Door, Heart, Star, Sparkles, Flower } from 'lucide-react';

const Page5Surprise = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bloomedFlowers] = useState(new Set());

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDoorClick = () => {
    if (isDoorOpen) return;
    
    setIsDoorOpen(true);
    setTimeout(() => setShowMessage(true), 1000);
    setTimeout(() => setShowFireworks(true), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 relative overflow-hidden">
      {/* Magical background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-magical-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Fireworks */}
      {showFireworks && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute firework animate-firework"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 40}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <Sparkles className="text-yellow-300" size={20} />
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Title */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <h1 className="text-2xl md:text-4xl font-light text-white mb-2">
            A Special Message
          </h1>
          <p className="text-sm md:text-lg text-purple-200">
            Something magical awaits behind this door
          </p>
        </div>

        {/* 3D Door */}
        <div className="relative perspective-1000">
          <div
            className={`relative w-48 h-64 md:w-64 md:h-80 cursor-pointer transform transition-all duration-1000 hover:scale-105 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            onClick={handleDoorClick}
          >
            {/* Door frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg shadow-2xl border-4 border-yellow-700"></div>
            
            {/* Door */}
            <div 
              className={`absolute inset-2 bg-gradient-to-br from-amber-700 to-amber-900 rounded-md transition-all duration-1000 transform-gpu ${
                isDoorOpen ? 'rotate-y-120 translate-x-8' : 'rotate-y-0'
              }`}
              style={{ transformOrigin: '0% 50%' }}
            >
              {/* Door handle */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full shadow-md"></div>
              
              {/* Door details */}
              <div className="absolute inset-4 border-2 border-amber-600 rounded-md opacity-50"></div>
            </div>

            {/* Door knocker */}
            <div className="absolute top-1/3 right-6 transform -translate-y-1/2">
              <Heart className="text-gold-400 animate-gentle-sway" size={16} fill="currentColor" />
            </div>
          </div>

          {/* Light beam from opened door */}
          {isDoorOpen && (
            <div className="absolute inset-0 z-20">
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-200/30 to-yellow-100/50 animate-light-beam"></div>
            </div>
          )}
        </div>

        {/* Surprise Message */}
        {showMessage && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
            <div className="max-w-lg mx-4 text-center animate-message-reveal">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="mb-6">
                  <Heart className="text-pink-300 mx-auto animate-pulse" size={48} fill="currentColor" />
                </div>
                
                <h2 className="text-xl md:text-2xl font-light text-white mb-4">
                  You are stronger than you think
                </h2>
                
                <p className="text-base md:text-lg text-purple-200 mb-6 leading-relaxed">
                  Love will find you again, but first, you're learning to love yourself completely. 
                  And that's the most beautiful love story of all.
                </p>

                <div className="flex justify-center space-x-4">
                  <Star className="text-yellow-300 animate-spin-slow" size={20} fill="currentColor" />
                  <Sparkles className="text-pink-300 animate-pulse" size={20} />
                  <Star className="text-yellow-300 animate-spin-slow" size={20} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!isDoorOpen && (
          <div className={`text-center mt-8 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-purple-200 text-sm animate-pulse">
              Touch the door to open your surprise
            </p>
          </div>
        )}

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-400/20 to-transparent"></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-4"
            style={{ left: `${15 + i * 15}%` }}
          >
            <Flower 
              className={`text-pink-400 animate-gentle-sway opacity-60 ${bloomedFlowers.has(i) ? 'animate-bloom' : ''}`}
              size={16}
              fill="currentColor"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5Surprise;