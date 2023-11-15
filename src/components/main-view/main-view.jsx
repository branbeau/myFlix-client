import { useState, useEffect } from "react";
import React from 'react';
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
<<<<<<< Updated upstream

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

=======
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)

  useEffect(() => {
    fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/movies")
      .then(res => res.json())
      .then(data => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

         setMovies(moviesFromApi);
    });
}, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
=======
        setMovies(moviesFromApi);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

if (!user) {
  return (
    <>
    <LoginView
      onLoggedIn={(user, token) => {
      setUser(user);
      setToken(token);
    }}
    />
    or
    <SignupView />
    </>
>>>>>>> Stashed changes
    );
}

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

<<<<<<< Updated upstream
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
=======
  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
>>>>>>> Stashed changes
    );
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
<<<<<<< Updated upstream
          onMovieClick={() => {
            setSelectedMovie(movie)
          }}
          />
        ))}
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>      
    </div>
    );
}
=======
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
}
>>>>>>> Stashed changes
