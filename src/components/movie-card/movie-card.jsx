import React from 'react';

export const MovieCard= ({ movie, onMovieClick }) => {
  return (
    <div>
      <div>
        <img src={movie.imagepath} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director.name}</span>
      </div>
      <button onClick={onMovieClick}>View movie</button>
    </div>
  );
};