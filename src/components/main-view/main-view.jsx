import { useState, useEffect } from "react";
import React from 'react';
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/movies")
      .then(res => res.json())
      .then(result => {
        const moviesFromApi = data.map((movie) => ({
          id: movie.id,
          title: movie.title,
          description: movie.description,
          genre: {
            name: movie.genre.name,
            description: movie.genre.description,
          },
          director: {
            name: movie.director.name,
            bio: movie.director.bio,
            birthYear: movie.director.birthYear
          }
        }));
    
        setMovies(moviesFromApi);
      })

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={() => {
            setSelectedMovie(movie)
          }}
          />
        ))}
      </div>
    );
  }