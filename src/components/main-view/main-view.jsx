import { useState, useEffect } from "react";
import React from 'react';
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/movies")
      .then(res => res.json())
      .then(data => {
        const moviesFromApi = data.map((movie) => ({
          id: movie._id,
          title: movie.Title,
          description: movie.Description,
          genre: {
            name: movie.Genre.Name,
            description: movie.Genre.Description,
          },
          director: {
            name: movie.Director.Name,
            bio: movie.Director.Bio,
            birthYear: movie.Director.BirthYear
          }
        }));

        setMovies(moviesFromApi);
      })
  },[])

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
            setSelectedMovie(movie);
          }}
        />
      ))}
      <button onClick={() => {
        setUser(null);
      }}>Logout</button>
    </div>
  );