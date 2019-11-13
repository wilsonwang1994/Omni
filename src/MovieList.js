import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const movieArray = movies.map((movie, i) => {
      return (
        <Movie
          key={movies[i].trackId}
          name={movies[i].trackName}
          img={movies[i].artworkUrl100}
          price={movies[i].trackRentalPrice}
        />
      )
    });

    return (
      <div>
        {movieArray}
      </div>
    );
  }
}

export default MovieList;
