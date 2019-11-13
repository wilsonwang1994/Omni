import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Movie from './Movie';
import Detail from './Detail';
import './MovieList.css';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const movieArray = movies.map((movie, i) => {
      return (
        <Popup
          key={movies[i].trackId}
          trigger={open => (
            <button>
              <Movie
                key={movies[i].trackId}
                name={movies[i].trackName}
                img={movies[i].artworkUrl100}
                price={movies[i].trackRentalPrice}
              />
            </button>
          )}
          position="center center"
          on="hover"
        >
          <Detail
            name={movies[i].trackName}
            price={movies[i].trackRentalPrice}
          />
        </Popup>
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
