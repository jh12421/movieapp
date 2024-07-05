// src/components/Stars.js
import React from 'react';

const Stars = ({ rating, onRatingChange }) => {
  // Function to handle when a star is clicked to set the rating
  const handleRating = (rate) => {
    if (onRatingChange) {
      onRatingChange(rate);
    }
  };

  return (
    <div>
      {/* Render 5 stars and highlight them based on the current rating */}
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          style={{ color: star <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
