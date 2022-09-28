import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/Topbar';
import MovieList from './components/movlist/MovieList';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
      setLoading(true);
      fetch("http://localhost:3000/movies")
      .then(resp=>resp.json())
      .then(movieList=>{
          setMovies(movieList);
          setFilteredMovies(movieList);
          setLoading(false);
      });
  }, []);

  function handleSearch(movieTitle){
    
    const filteredArray = movies.filter( (movie)=>{ 
      return movie.title.toLowerCase().includes(movieTitle.toLowerCase());
    } );
    
    setFilteredMovies(filteredArray);

  }

  return (
    <div className="App">
      <TopBar onSearch={ handleSearch } />
      {loading ? 'Loading Movies' : <MovieList movies={ filteredMovies } />}
    </div>
  );
}

export default App;
