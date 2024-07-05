// src/components/ReviewForm.js
import React, { useState } from 'react';
import Stars from './Stars';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new review and rating to the list of reviews
    addReview({ text: review, rating });
    // Clear the form inputs
    setReview('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Textarea for writing the review */}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave a review"
      ></textarea>
      {/* Star rating input */}
      <Stars rating={rating} onRatingChange={setRating} />
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
