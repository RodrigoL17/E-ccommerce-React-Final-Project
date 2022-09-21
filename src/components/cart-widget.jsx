import React from "react";
import Badge from "./badge";

const CartIcon = () => {
  return (
    <>
    <div className="nav-item dropdown cart-icon">
        <button
          className="dropdown-toggle btn btn-light py-2"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="bi bi-cart3"></i>
          <Badge/>
        </button>
        <div className="dropdown-menu">
          
        </div>
      </div>
    </>
    
  );
};

export default CartIcon;
