import React from 'react'
import Axios from 'axios'
import Movie from './movie'
import './App.css'

class App extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  }

  constructor(props) {
    super(props)
    console.log('constru')
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    )
    this.setState({ movies: movies })
  }
  componentDidMount() {
    console.log('componentDidMount ')
    this.getMovies()
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  Add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }
  Minus = () => {
    this.setState(text => ({ count: text.count - 1 }))
  }
  render() {
    console.log('render')

    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">'Loading ...'</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            })}
          </div>
        )}
      </section>
    )
    /*<div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Minus}>Minus</button>
      </div>*/
  }
}

export default App
