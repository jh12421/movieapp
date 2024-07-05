// src/components/ReviewList.js
import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {/* Map through the reviews array and render a Review component for each review */}
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
