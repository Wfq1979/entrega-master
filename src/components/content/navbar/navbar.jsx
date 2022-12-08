import React from 'react';
import Busqueda from './busqueda.jsx';
import Desplegable from './desplegable.jsx';
import Links from './links.jsx';
import Logo from './logo.jsx';
import DespCat from './despCat.jsx';
import '../../../estilos/navbar.css'
const NavBar = () => {
  const listCategoria = ["Rubias", "Negras", "Rojas"]
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid divNabvar">

          <Logo />

          <div className="collapse navbar-collapse " id="navbarColor01">
            <ul className="navbar-nav me-auto ">
              <DespCat lista = {listCategoria} />
              <Links />
              <Desplegable />

            </ul>

            <Busqueda busqueda="Qué buscas?" />

          </div>
        </div>
      </nav>


    </>
  );
}

export default NavBar;
