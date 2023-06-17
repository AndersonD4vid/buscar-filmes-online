import react, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import './styles.css'

export default function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  }


  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie color='#fff' size={28} /> 
          MoviesLib - Informações de filmes
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Busque um filme" 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        <button type="submit">
        <BiSearchAlt2 color='#fff' size={22} /> 
        </button>
      </form>
    </nav>
  )
}
