import { useState } from 'react';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import SignupView from "../signup-view/signup-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);

  const authenticateUser = (username, password) => {
    // Your authentication logic goes here
  };

  const generateToken = (user) => {
    // Your token generation logic goes here
  };

  const handleLogin = () => {
    const user = authenticateUser(username, password);
    const token = generateToken(user);

    onLoggedIn(user, token);
  };

  fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ Username: Username, Password: Password })
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
        } else {
            alert("No such user");
        }
    })
    .catch((e) => {
        alert("Something went wrong");
    });

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
      {/* Render the MovieView component */}
      { selectedMovie ? <MovieView movie={selectedMovie} /> : null }
  
      {/* Render the SignupView component */}
      { user === null ? <SignupView /> : null }
  
      <form>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
  
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
  
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>
  
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
    </div>
  );