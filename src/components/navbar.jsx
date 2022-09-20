import React from 'react';
import Barrabusqueda from "./barrabusqueda";
import UlLinks from './ul-links';


const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <UlLinks/>
            <Barrabusqueda/>
          </div>
        </div>
      </nav>  
        </>
    );
}

export default Navbar;
