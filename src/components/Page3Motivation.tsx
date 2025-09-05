import React, { useState, useEffect } from 'react';
import { Star, Sparkles, X } from 'lucide-react';

const Page3Motivation = () => {
  const [visibleStars, setVisibleStars] = useState(new Set<number>());
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Constellation spelling "INDU"
  const stars = [
    // I
    { x: 10, y: 20, delay: 0, quote: "You are stronger than you think 🌸" },
    { x: 10, y: 40, delay: 200, quote: "Even the darkest night will end ☀️" },
    { x: 10, y: 60, delay: 400, quote: "Your heart deserves peace 💖" },

    // N (indices 3, 4, 5, 6) - Reordered for correct line drawing
    { x: 25, y: 60, delay: 800, quote: "You are loved more than you know 💕" }, // Bottom-Left
    { x: 25, y: 20, delay: 600, quote: "Healing takes time, and that’s okay 🌿" }, // Top-Left
    { x: 35, y: 60, delay: 1200, quote: "Every setback is a setup for a comeback 🌟" }, // Bottom-Right
    { x: 35, y: 20, delay: 1000, quote: "Storms make trees take deeper roots 🌳" }, // Top-Right

    // D
    { x: 50, y: 20, delay: 1400, quote: "Breathe. You are doing your best 🌼" },
    { x: 50, y: 60, delay: 1600, quote: "The universe is guiding you ✨" },
    { x: 58, y: 25, delay: 1800, quote: "Your story isn’t over yet 📖" },
    { x: 60, y: 40, delay: 2000, quote: "You shine even in tough times 🌙" },
    { x: 58, y: 55, delay: 2200, quote: "Keep going, better days are coming 🌈" },

    // U
    { x: 75, y: 20, delay: 2400, quote: "Love heals everything 💕" },
    { x: 75, y: 60, delay: 2600, quote: "Peace is growing inside you 🌿" },
    { x: 85, y: 60, delay: 2800, quote: "You’re becoming unstoppable 🌟" },
    { x: 85, y: 20, delay: 3000, quote: "The stars believe in you ✨" },
  ];

  const groups = [
    [0, 1, 2],          // I
    [3, 4, 5, 6],       // N
    [7, 8, 9, 10, 11],  // D
    [12, 13, 14, 15]    // U
  ];

  useEffect(() => {
    setIsLoaded(true);

    stars.forEach((star, index) => {
      setTimeout(() => {
        setVisibleStars(prev => new Set([...prev, index]));
      }, star.delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.5 + Math.random()}px`,
              height: `${0.5 + Math.random()}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-light text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-300" size={24} />
            Written in the Stars
            <Sparkles className="text-yellow-300" size={24} />
          </h1>
          <p className="text-sm md:text-lg text-purple-200">
            Click a star to reveal your affirmation
          </p>
        </div>

        {/* Interactive Constellation */}
        <div className="relative w-full max-w-3xl h-64 md:h-80">
          {stars.map((star, index) => (
            <div
              key={index}
              className={`absolute cursor-pointer transition-all duration-500 transform hover:scale-150 ${
                visibleStars.has(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              onClick={() => setSelectedStar(index)}
            >
              <Star
                className="text-yellow-300 star-glow animate-pulse"
                size={16}
                fill="currentColor"
              />
            </div>
          ))}

          {/* Lines */}
          {groups.map((group, gIndex) => (
            <svg key={gIndex} className="absolute inset-0 w-full h-full pointer-events-none">
              {group.slice(0, -1).map((starIndex, i) => {
                const star1 = stars[starIndex];
                const star2 = stars[group[i + 1]];
                return (
                  <line
                    key={i}
                    x1={`${star1.x}%`} y1={`${star1.y}%`}
                    x2={`${star2.x}%`} y2={`${star2.y}%`}
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth="1.5"
                    className="constellation-line animate-draw-line"
                    style={{ animationDelay: `${star1.delay + 500}ms` }}
                  />
                );
              })}
            </svg>
          ))}
        </div>

        {/* Affirmation Display */}
        {selectedStar !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="relative max-w-lg w-full bg-gradient-to-br from-purple-800/80 to-pink-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl animate-scale-in">
              <button
                onClick={() => setSelectedStar(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <div className="mb-4">
                  <Sparkles className="text-yellow-300 mx-auto animate-pulse" size={32} />
                </div>
                <p className="text-white text-base md:text-lg leading-relaxed font-light">
                  {stars[selectedStar].quote}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom hint */}
        <div
          className={`absolute bottom-16 text-center transform transition-all duration-1000 delay-3000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-purple-300 text-xs">
            The universe has messages just for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3Motivation;