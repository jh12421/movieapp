// src/components/Review.js
import React from 'react';
import Stars from './Stars';

const Review = ({ review }) => {
  return (
    <div className="review">
      {/* Display the text of the review */}
      <p>{review.text}</p>
      {/* Display the star rating */}
      <Stars rating={review.rating} />
    </div>
  );
};

export default Review;
