import React, { Component } from 'react';


const SearchBox = () => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search movies' />
    </div>
  );
}

export default SearchBox;
