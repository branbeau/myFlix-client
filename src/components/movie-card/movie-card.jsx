import React from 'react';
import PropTypes from "prop-types";

/* export const MovieCard= ({ movie, onMovieClick }) => {
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
 */

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      birthYear: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};