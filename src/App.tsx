// src/App.tsx
import React, { useState, useEffect } from 'react';
import Page1BrokenHeart from './components/Page1BrokenHeart';
import Page2Memories from './components/Page2Memories';
import Page3Motivation from './components/Page3Motivation';
import Page4Garden from './components/Page4Garden';
import Page5Surprise from './components/Page5Surprise';
import Navigation from './components/Navigation';
import CursorEffects from './components/CursorEffects';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages = [
    Page1BrokenHeart,
    Page2Memories,
    Page3Motivation,
    Page4Garden,
    Page5Surprise
  ];

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentPage < pages.length - 1) {
      handlePageChange(currentPage + 1);
    } else if (direction === 'right' && currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  };

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handleSwipe('right');
        } else {
          handleSwipe('left');
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, pages.length]);

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200">
      <CursorEffects />
      <AudioPlayer />

      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <CurrentPageComponent />
      </div>

      <Navigation
        currentPage={currentPage}
        totalPages={pages.length}
        onPageChange={handlePageChange}
        isTransitioning={isTransitioning}
      />

      <div className="fixed bottom-12 left-4 text-xs text-purple-400 opacity-50 z-10">
        {currentPage + 1} / {pages.length}
      </div>
      <Footer />
    </div>
  );
}

export default App;