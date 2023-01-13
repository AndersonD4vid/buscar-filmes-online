import react, {useState, useEffect} from 'react'
import Card from '../../components/Card'

import './movieGrid.css';

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRateMovies = async (url) => {
    const resposta = await fetch(url)
    const data = await resposta.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`
    getTopRateMovies(topRatedUrl)
  },[])

  return (
    <div className='container'>
      <h2 className='title'>20 Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
