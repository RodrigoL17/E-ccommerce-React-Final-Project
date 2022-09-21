import React from "react";
import Badge from "./badge";
import ListItemContainer from "./list-item-container";

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
        <ListItemContainer/>
      </div>
    </>
    
  );
};

export default CartIcon;
