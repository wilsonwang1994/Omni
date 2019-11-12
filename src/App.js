import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import { Data } from './Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    
  }

  render() {
    return (
      <div className='tc'>
        <h1>iTunes Movies</h1>
        <SearchBox
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <MovieList Data={Data} />
      </div>
    );
  }
}

export default App;
