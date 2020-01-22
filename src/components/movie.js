import React from 'react'
import PropTypes from 'prop-types'
import './movie.css'

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year"> {year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, number) => (
            <li key={number} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}</p>
      </div>
    </div>
  )
}
Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
export default Movie
