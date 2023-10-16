import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './All/Principal/Principal'
import NavBar from './All/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import Peliculas from './All/Peliculas/Peliculas';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Principal/>
    <Peliculas/>

  </React.StrictMode>,
)
