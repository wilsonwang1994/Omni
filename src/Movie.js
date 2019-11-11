import React, { Component } from 'react';


const Movie = (props) => {
  const {name, img, price } = props;
  return (
    <div className='bg-light-silver dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h2>{name}</h2>
      <img alt='movie' src={img} />
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Movie;
