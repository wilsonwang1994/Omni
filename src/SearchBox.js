import React, { Component } from 'react';


const SearchBox = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='center'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search movies'
        onChange={onInputChange}/>
      <button
        className='f6 link dim ba bw1 ph3 pv2 mb2 dib dark-gray'
        onClick={onButtonSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
