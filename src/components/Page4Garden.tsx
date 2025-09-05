import React, { useState, useEffect, useRef } from 'react';
import { Flower, Router as Butterfly, Heart } from 'lucide-react';

const Page4Garden = () => {
  const [bloomedFlowers, setBloomedFlowers] = useState(new Set<number>());
  const [activeFlower, setActiveFlower] = useState<number | null>(null); // New state for active quote
  const [butterflies, setButterflies] = useState<Array<{x: number, y: number, id: number}>>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const flowers = [
    {
      quote: "You are blooming in ways you don't even realize yet.",
      color: "text-pink-400",
      position: { x: 20, y: 70 }
    },
    {
      quote: "Your heart is a garden - tend to it with kindness.",
      color: "text-purple-400",
      position: { x: 45, y: 60 }
    },
    {
      quote: "You deserve love that waters your soul, not wilts your spirit.",
      color: "text-rose-400",
      position: { x: 70, y: 75 }
    },
    {
      quote: "Growth happens in the darkness before the bloom.",
      color: "text-violet-400",
      position: { x: 30, y: 40 }
    },
    {
      quote: "You are both the gardener and the flower - nurture yourself.",
      color: "text-pink-500",
      position: { x: 60, y: 45 }
    },
    {
      quote: "Every season of your life serves a purpose, even winter.",
      color: "text-purple-500",
      position: { x: 15, y: 35 }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const scrollTop = scrollRef.current.scrollTop;
      const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const scrollProgress = scrollTop / maxScroll;
      
      const flowersToBloom = Math.floor(scrollProgress * flowers.length * 1.5);
      setBloomedFlowers(new Set(Array.from({ length: flowersToBloom }, (_, i) => i)));
      
      // Set the latest bloomed flower as active
      setActiveFlower(flowersToBloom > 0 ? flowersToBloom - 1 : null);
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [flowers.length]);

  useEffect(() => {
    // Add butterflies periodically
    const interval = setInterval(() => {
      setButterflies(prev => {
        const newButterfly = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          id: Date.now()
        };
        return [...prev.slice(-4), newButterfly];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleFlowerClick = (index: number) => {
    // Bloom the flower if it's not already
    setBloomedFlowers(prev => new Set([...prev, index]));
    // Set the clicked flower's quote as active
    setActiveFlower(index);
    
    // Add a heart animation
    const newButterfly = {
      x: flowers[index].position.x,
      y: flowers[index].position.y,
      id: Date.now()
    };
    setButterflies(prev => [...prev, newButterfly]);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Floating butterflies */}
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute z-20 animate-butterfly-float pointer-events-none"
          style={{ 
            left: `${butterfly.x}%`, 
            top: `${butterfly.y}%`,
          }}
        >
          <Butterfly className="text-purple-500 animate-pulse" size={20} />
        </div>
      ))}

      <div 
        ref={scrollRef}
        className="relative z-10 h-screen overflow-y-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="min-h-[150vh] relative p-4 flex flex-col pb-24">
          {/* Title */}
          <div className="text-center py-16">
            <h1 className="text-3xl md:text-5xl font-light text-purple-800 mb-4">
              Self-Love Garden
            </h1>
            <p className="text-lg md:text-xl text-purple-600">
              Scroll or tap a flower to see its message
            </p>
          </div>

          {/* Garden Ground */}
          <div className="relative w-full flex-grow">
            {/* Grass effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200 to-transparent"></div>
            
            {/* Flowers */}
            {flowers.map((flower, index) => (
              <div
                key={index}
                className="absolute cursor-pointer"
                style={{ 
                  left: `${flower.position.x}%`, 
                  top: `${flower.position.y}%`,
                }}
                onClick={() => handleFlowerClick(index)}
              >
                {/* Stem */}
                <div className={`absolute left-1/2 top-full w-0.5 bg-green-500 transition-all duration-1000 ${
                  bloomedFlowers.has(index) ? 'h-12 opacity-100' : 'h-6 opacity-50'
                }`}></div>
                
                {/* Flower */}
                <div className={`transform transition-all duration-1000 ${
                  bloomedFlowers.has(index) 
                    ? 'scale-100 rotate-0 opacity-100' 
                    : 'scale-50 rotate-45 opacity-70'
                }`}>
                  <Flower 
                    className={`${flower.color} flower-glow animate-gentle-sway`} 
                    size={24}
                    fill="currentColor"
                  />
                </div>

                {/* Quote bubble - now shows only for the active flower */}
                {activeFlower === index && bloomedFlowers.has(index) && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 w-48 md:w-64">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-purple-200 animate-fade-in-up">
                      <p className="text-xs md:text-sm text-purple-800 text-center leading-relaxed">
                        {flower.quote}
                      </p>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Floating hearts */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-heart-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              >
                <Heart 
                  className="text-pink-300 opacity-40" 
                  size={12}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center py-16 mt-auto">
            <p className="text-purple-700 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Each flower in your garden represents a part of you that's ready to bloom again. 
              You are your own sanctuary.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="w-1 h-16 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-purple-400 to-pink-400 transition-all duration-300 ease-out"
            style={{ 
              height: `${(bloomedFlowers.size / flowers.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Page4Garden;