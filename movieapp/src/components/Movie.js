// src/components/Movie.js
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  // State to manage the list of reviews for this movie
  const [reviews, setReviews] = useState(movie.reviews);

  // Function to add a new review to the list of reviews
  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      {/* Display the movie's image */}
      <img src={movie.image} alt={movie.title} />
      {/* Display the movie's synopsis */}
      <p>{movie.synopsis}</p>
      {/* Display the star rating component */}
      <Stars rating={movie.rating} />
      {/* Display the list of reviews */}
      <ReviewList reviews={reviews} />
      {/* Display the form to add a new review */}
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;
