import React from "react";
import Badge from "../cart/badge";

const CartIcon = () => {
  return (
    <>
      <div className="dropdown cart-icon">
        <button
          className="dropdown-toggle btn btn-light btn-sm"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-cart3"></i>
          <Badge />
        </button>
        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div> */}
      </div>
    </>
  );
};

export default CartIcon;
