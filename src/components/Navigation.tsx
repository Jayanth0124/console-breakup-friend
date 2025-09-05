import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isTransitioning: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, totalPages, onPageChange, isTransitioning }) => {
  // Conditionally set the vertical position.
  // Page 3 is at index 2 (since counting starts from 0).
  const verticalPositionClass = currentPage === 2
    ? 'top-1/3 -translate-y-1/2' // Higher position for the Stars page
    : 'top-1/2 -translate-y-1/2'; // Default middle position for all other pages

  return (
    <>
      {/* Page indicators */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Previous page button */}
      {currentPage > 0 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isTransitioning}
          className={`fixed left-4 transform z-30 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 ${verticalPositionClass}`}
        >
          <ChevronLeft className="text-white" size={20} />
        </button>
      )}

      {/* Next page button */}
      {currentPage < totalPages - 1 && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isTransitioning}
          className={`fixed right-4 transform z-30 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 ${verticalPositionClass}`}
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      )}
    </>
  );
};

export default Navigation;