import React from "react";
import { Link } from "react-router-dom";
import Badge from "../cart/badge";


const CartIcon = () => {
  
  return (
      <div className="cart-icon">
        <Link
          className="btn btn-light btn-sm" data-title="Ir al carrito" to="/Carrito"
        >
          <i className="bi bi-cart3"></i>
          <Badge/>
        </Link>
      </div>
  );
};

export default CartIcon;
