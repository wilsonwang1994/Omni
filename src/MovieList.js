import React, { Component } from 'react';
import Movie from './Movie';

const MovieList = ({ Data }) => {
  const MovieArray = Data.map((movie, i) => {
    return (
      <Movie
      id={Data[i].id}
      name={Data[i].name}
      img={Data[i].img}
      price={Data[i].price}/>
    )
  });
  return (
    <div>
      {MovieArray}
    </div>
  );
}

export default MovieList;
