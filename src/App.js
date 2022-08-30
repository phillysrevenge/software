
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const APIURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=707da229';
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }


const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState();
  const searchMovie = async (title) => {
    const response = await fetch(`${APIURL} &s=${title}`);
    const data = await response.json();
    setMovies(data.Search)

  }

  useEffect(() => {
    searchMovie();
  }, [])
  return (
    <div className='app'>
      <h1>Beginning!</h1>

      <div className='search'>
        <input placeholder='Search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon}
          alt='search'
          onClick={() => searchMovie(search)}
        />
      </div>
      {
        movies?.length > 0
          ? (<div className='container'>
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}

          </div>)
          : (<div className='empty'>
            <h2>No movies found</h2>
          </div>)
      }

    </div>

  );
}

export default App;
