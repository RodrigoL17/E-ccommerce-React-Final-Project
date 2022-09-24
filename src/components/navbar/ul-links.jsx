import React from "react";
import DropdownMenu from "./dropdown-menu";
import Link from "../layout/link"

const UlLinks = () => {
  return (
    <>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <Link aContent={"contenido 1"}/>
        <Link aContent={"contenido 2"}/>
        <Link aContent={"contenido 3"}/>
        <DropdownMenu />
      </ul>
    </>
  );
};

export default UlLinks;
