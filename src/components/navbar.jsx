import React from "react";
import Barrabusqueda from "./barrabusqueda";
import UlLinks from "./ul-links";
import CartIcon from "./cart-widget";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
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
            <UlLinks />
            <CartIcon/>
            <Barrabusqueda busqueda={"Buscar"}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
