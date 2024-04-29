import React from 'react';
import "./css/menu.css"

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg custom-bg-color fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/inicio">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Mantenimiento </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="http://localhost:3000/usuarios" >Usuarios</a></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/habitaciones" >Habitaciones</a></li>
                  <li><a className="dropdown-item" href="http://localhost:3000/reservaciones" >Reservaciones</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/galeria">Galeria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/reservacionespage">Reservaciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/nosotros">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/contactos">Contacto</a>
              </li>
            </ul>
            <div>
              <i className="fa-sharp fa-solid fa-right-from-bracket text-white"></i>
              <a className="text-white text-decoration-none ms-2" href="http://localhost:3000">Cerrar Sesion</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu;