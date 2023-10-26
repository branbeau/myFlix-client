import { useState, useEffect } from "react";
import React from 'react';
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(null);
  export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
      if (!token) return;
   
      fetch("..../movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((movies) => {
          setMovies(movies);
   
        });
    }, [token]);
  
    fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/movies", {
      headers: { Authorization: Bearer ${token} },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [token]);

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
    });
}, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    );
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
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>      
    </div>
    );
}