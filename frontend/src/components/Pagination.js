import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }
    
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }
    
    rangeWithDots.push(...range);
    
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }
    
    return rangeWithDots;
  };

  const visiblePages = totalPages <= 7 ? 
    Array.from({ length: totalPages }, (_, i) => i + 1) : 
    getVisiblePages();

  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-button pagination-nav ${currentPage === 1 ? '' : ''}`}
      >
        ← Previous
      </button>
      
      {visiblePages.map((page, index) => (
        page === '...' ? (
          <span key={`dots-${index}`} className="pagination-button" style={{ cursor: 'default', border: 'none' }}>
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination-button ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        )
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pagination-button pagination-nav ${currentPage === totalPages ? '' : ''}`}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;