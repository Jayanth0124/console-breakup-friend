import React, { useState, useEffect } from 'react';
import { Image, X } from 'lucide-react';
// Footer import is no longer needed here

const Page2Memories = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const memories = [
    {
      image: "/image1.png",
      message: "Sometimes, all we need is a hand to hold, reminding us we don’t have to face the storm alone. 🌸"
    },
    {
      image: "/image2.png",
      message: "Tears are not weakness, they are proof of your strength to feel. My shoulder is yours, always.🩷"
    },
    {
      image: "/image3.png",
      message: "Healing isn’t about becoming who you were before, it’s about creating something stronger and more beautiful from the pieces. 🌹✨"
    },
    {
      image: "/image4.png",
      message: "One day, your smile will return without effort, and laughter will feel like home again. 💫"
    },
    {
      image: "/image5.png",
      message: "Every sunrise whispers that no night lasts forever .. hope is already waiting for you in the light. 🌅"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    // The structure is simplified, removing the outer flex container and the duplicate footer.
    <div className="h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Title */}
        <div className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <h1 className="text-2xl md:text-4xl font-light text-white mb-2">Beautiful Memories</h1>
          <p className="text-sm md:text-lg text-purple-200">Each one shaped who you are today</p>
        </div>

        {/* 3D Photo Gallery */}
        <div className="relative w-full max-w-4xl h-64 md:h-96 perspective-1000">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`absolute photo-frame cursor-pointer transform transition-all duration-1000 hover:scale-110 hover:z-20 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{
                left: `${10 + (index * 15)}%`,
                top: `${20 + Math.sin(index) * 20}%`,
                transform: `rotateY(${-20 + index * 8}deg) rotateX(${Math.sin(index) * 5}deg)`,
                animationDelay: `${index * 200}ms`,
                zIndex: memories.length - index
              }}
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white p-1 rounded-lg shadow-2xl transform-gpu">
                <img 
                  src={memory.image} 
                  alt={memory.message} 
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory Modal */}
        {selectedPhoto !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="relative max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform animate-scale-in">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <img 
                  src={memories[selectedPhoto].image} 
                  alt={memories[selectedPhoto].message} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {memories[selectedPhoto].message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation hint */}
        <div
          className={`absolute bottom-16 text-center transform transition-all duration-1000 delay-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          <p className="text-purple-200 text-xs">Tap a memory to reveal its title</p>
        </div>
      </div>
      {/* The extra Footer component has been removed from here */}
    </div>
  );
};

export default Page2Memories;