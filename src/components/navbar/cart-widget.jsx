import React from "react";
import Badge from "../cart/badge";
import ListItemContainer from "../content/list-item-container";

const CartIcon = () => {
  return (
    <>
    <div className="dropdown cart-icon">
        <button
          className="dropdown-toggle btn btn-light btn-sm"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-cart3"></i>
          <Badge/>
        </button>
      </div>
    </>
    
  );
};

export default CartIcon;
