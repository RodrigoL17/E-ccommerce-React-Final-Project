import React, {memo} from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./dropdown-menu";

const UlLinks = () => {
  return (
    <>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" data-title="Inicio" to="/">
          <i className="bi bi-house-fill nav-link-icon"></i>
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <Link className="nav-link" data-title="Contacto" to="/Contacto">
        <i className="bi bi-chat-text-fill nav-link-icon"></i>
        </Link>
        <Link className="nav-link" data-title="Nosotros" to="/About">
        <i className="bi bi-people-fill nav-link-icon"></i>
        </Link>
        <DropdownMenu />
      </ul>
    </>
  );
};

export default memo(UlLinks);
