import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <>
      <li className="nav-item dropdown categorias">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Categorias
        </Link>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/Categorias/Smartphones">
            Smartphones
          </Link>
          <Link className="dropdown-item" to="/Categorias/Laptops">
            Computadoras
          </Link>
          <Link className="dropdown-item" to="/Categorias/Fragrances">
            Perfumes
          </Link>
          <Link className="dropdown-item" to="/Categorias/Skincare">
            Cosmeticos
          </Link>
          <Link className="dropdown-item" to="/Categorias/Groceries">
            Comestibles
          </Link>
          <Link className="dropdown-item"to="/Categorias/Home-Decoration">
            Decoracion del Hogar
          </Link>
        </div>
      </li>
    </>
  );
};

export default DropdownMenu;
