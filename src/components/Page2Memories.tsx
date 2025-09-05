import React, { useState, useEffect } from 'react';
import { Image, X } from 'lucide-react';

const Page2Memories = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const memories = [
    {
      image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      message: "Every sunset you watched together was beautiful, but you'll see even more beautiful ones ahead."
    },
    {
      image: "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      message: "The laughter you shared was real. That joy lives within you, always."
    },
    {
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      message: "You gave love freely and fully. That capacity for love is your superpower."
    },
    {
      image: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      message: "Every dream you shared made you brave. Your dreams are still valid and beautiful."
    },
    {
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      message: "You learned what love feels like. Now you know what to look for in the future."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
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
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-md flex items-center justify-center">
                  <Image size={20} className="text-purple-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg"></div>
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
                <div className="w-full h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg mb-4 flex items-center justify-center">
                  <Image size={32} className="text-purple-700" />
                </div>
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
          <p className="text-purple-200 text-xs">Tap memories to reveal their wisdom</p>
        </div>


      </div>
    </div>
  );
};

export default Page2Memories;