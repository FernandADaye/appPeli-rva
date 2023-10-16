import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './All/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import Pelicula from './All/Pelicula/Pelicula';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Pelicula/>
  </React.StrictMode>,
)
