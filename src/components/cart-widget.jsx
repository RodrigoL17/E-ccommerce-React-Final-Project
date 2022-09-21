import React from "react";
import Badge from "./badge";

const CartIcon = () => {
  return (
    <>
    <div className="dropdown cart-icon">
        <button
          className="dropdown-toggle btn btn-light btn-sm"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-offset="100,200"
        >
          <i class="bi bi-cart3"></i>
          <Badge/>
        </button>
        <div className="dropdown-menu mt-2">
        
        </div>
      </div>
    </>
    
  );
};

export default CartIcon;
