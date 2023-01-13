import react from 'react'
import {Outlet } from 'react-router-dom'
import NavBar from './components/Navbar'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet /> {/* exibe as páginas do router */}
      
    </div>
  )
}
