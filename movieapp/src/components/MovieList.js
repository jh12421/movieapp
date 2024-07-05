// src/components/MovieList.js
import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
  // State to hold a list of movies
  const [movies, setMovies] = useState([
    // Sample movies data
    {
      id: 1,
      title: "Inception",
      image: "inception.jpg",
      synopsis: "A thief who steals corporate secrets...",
      rating: 4,
      reviews: [
        { text: "Great movie!", rating: 5 },
        { text: "Mind-blowing!", rating: 4 },
      ],
    },
    {
      id: 2,
      title: "Interstellar",
      image: "interstellar.jpg",
      synopsis: "A team of explorers travel through a wormhole...",
      rating: 5,
      reviews: [
        { text: "Amazing visuals!", rating: 5 },
        { text: "A must-watch!", rating: 5 },
      ],
    }
  ]);

  return (
    <div>
      {/* Map through the movies array and render a Movie component for each movie */}
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
