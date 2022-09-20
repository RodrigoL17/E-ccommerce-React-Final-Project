import React from 'react';
import DropdownMenu from './dropdown-menu';
import Link from './link';

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
              <Link/>
              <Link/>
              <Link/>
              <DropdownMenu/>
            </ul>   
        </>
    );
}

export default UlLinks;
