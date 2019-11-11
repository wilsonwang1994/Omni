import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import { Data } from './Data';

const App = () => {
  return (
    <div className='tc'>
      <h1>iTunes Movies</h1>
      <SearchBox />
      <MovieList Data={Data} />
    </div>
  );
}

export default App;
