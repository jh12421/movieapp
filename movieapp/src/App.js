// src/App.js
import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* App title */}
      <h1>Movie Review App</h1>
      {/* Render the MovieList component */}
      <MovieList />
    </div>
  );
}

export default App;
