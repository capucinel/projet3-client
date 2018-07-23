import React, { Component } from 'react'
import './App.css'
import Movie from './components/movie.js'


class App extends Component {

  state = {
  movies: [],
  favourites: []
}

constructor() {
  super()
    fetch("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
      .then(res => res.json())
      .then(res => this.setState({movies: res.movies}))
}

addFav = (id) => {
  if (this.state.favourites.find((fav => fav.id === id))) {
    return
  }
    const fav = this.state.movies.find(movie => movie.id === id)

    const favourites = [ ...this.state.favourites, fav ]

    console.log(this.state.favourites)
    this.setState({ favourites: favourites })
}

remove = (id) => {
  const removeFromList = this.state.favourites.filter(fav => fav.id !== id)

  this.setState({favourites: removeFromList})
  console.log(this.state.favourites)

}
  render() {
    const movies = this.state.movies
    .map(c =>
    <Movie
    title={c.title}
    year={c.year}
    id={c.id}
    add={this.addFav}
    />)

    const listFavourites = this.state.favourites
    .map(f =>
    <Movie key={f.id} {...f}>
    {/* title={f.title}
    year={f.year}
    rem={this.remove}  */}
     <Movie/>)

    return (
      <div className="App">
        <h2>Favourites</h2>
        <p>{listFavourites}</p>
        <h2>Movies</h2>
        <p>{movies}</p>
      </div>
    );
  }
}

export default App;
