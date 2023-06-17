import react, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import './styles.css';
import '../Home/movieGrid.css';

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function Movie() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);


  return (
    <div className="movie-page">
      {movie && (
        <>
          <Card movie={movie} showLink={false} />
          <a
         target='_blank'
         rel='external'
            style={{marginBottom: 10}}
         href={`https://youtube.com/results?search_query=${movie.title} Trailer`} >Assistir Trailer</a>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}
