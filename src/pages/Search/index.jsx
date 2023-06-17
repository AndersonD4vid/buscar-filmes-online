import react, {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom';
import Card from '../../components/Card';

import '../Home/movieGrid.css';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query");

  const getSearchedMovies = async (url) => {
    const resposta = await fetch(url)
    const data = await resposta.json()

    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryUrl)
  },[query])

  
  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
