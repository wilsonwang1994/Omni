import React, { Component } from 'react';
import MovieList from './components/MovieList/MovieList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      movies: []
    }
  }

  constructUrl = () => {
    var url = 'https://itunes.apple.com/search?term=';
    const wordArray = this.state.searchfield.trim().split(' ');
    for (var i = 0; i < wordArray.length; i++) {
      url = url + wordArray[i];
      if (i < wordArray.length - 1) {
        url = url + '+';
      }
    }
    url = url + '&entity=movie'
    return url;
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  onButtonSubmit = () => {
    fetch(this.constructUrl())
      .then(response => response.json())
      .then((jsonData) => {
        this.setState({movies: jsonData['results']})
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
      <div className='tc'>
        <h1>iTunes Movies</h1>
        <SearchBox
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
