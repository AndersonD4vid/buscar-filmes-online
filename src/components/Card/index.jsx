import react from 'react';
import {Link} from 'react-router-dom';
import {FaStar} from 'react-icons/fa';

import '../../pages/Home/movieGrid.css';
import './styles.css';

const imagesUrl = import.meta.env.VITE_IMG;

export default function Card({movie, showLink = true}) {
  return (
    <div className='movie-card'>
      <img src={imagesUrl + movie.poster_path} alt={movie.title} />
      <div className='infor'>
        <h3 className='title'>{movie.title}</h3>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 0}}>
          <span>
            <FaStar color='yellow' size={22} style={{marginRight: 10}} /> 
            {movie.vote_average}
          </span>
          {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
      </div>
    
    </div>
  )
}
