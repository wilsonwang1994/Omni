import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {key, name, img, price} = this.props;
    return (
      <div className="movie-box grow">
        <div className="klitem">
          <div className="klzc">
            <div className="klic">
              <img src={img} alt={name} />
            </div>
          </div>
          <div className="kltat">
              <span >{name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
