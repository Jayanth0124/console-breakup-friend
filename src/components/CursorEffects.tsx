import React, { useEffect, useState } from 'react';

const CursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add sparkle on movement
      if (Math.random() > 0.7) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20
        };
        
        setSparkles(prev => [...prev.slice(-8), newSparkle]);
        
        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Custom cursor */}
      <div
        className="absolute w-6 h-6 border-2 border-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div className="absolute inset-1 bg-white rounded-full opacity-30"></div>
      </div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-pink-300 rounded-full animate-sparkle-fade"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        />
      ))}

      {/* Trailing hearts */}
      <div
        className="absolute w-2 h-2 animate-pulse opacity-30 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        💖
      </div>
    </div>
  );
};

export default CursorEffects;