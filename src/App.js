import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/Topbar';
import MovieList from './components/movlist/MovieList';
import { useEffect, useState } from 'react';
import AddMovie from './components/addmovie/AddMovie';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Template from './components/template/Template';

function App() {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movieAdded, setMovieAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3009/movies")
      .then(resp => resp.json())
      .then(movieList => {
        setMovies(movieList);
        setFilteredMovies(movieList);
        setLoading(false);
      });
  }, [movieAdded]);

  function handleSearch(movieTitle) {

    const filteredArray = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(movieTitle.toLowerCase());
    });

    // setFilteredMovies(filteredArray);
    setMovies(filteredArray);

  }

  function movieWasAdded(newMovie) {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Template >
        <Routes>
          <Route path="/" index element={<MovieList movies={filteredMovies} />} />
          <Route path="/addmovie" element={<AddMovie onMovieAdded={movieWasAdded} />} />
          <Route path="/edit/:movieid" element={<AddMovie onMovieAdded={movieWasAdded} />} />
        </Routes>      
      </Template>  
      </BrowserRouter>
    </div>
  );
}

export default App;
