import React, { useContext, useState, useEffect } from "react";
import {CarritoContext} from "../../../context/carritoContext";

const Badge = () => {
  const {carrito,} = useContext(CarritoContext);
  
  return (
    <>
      {carrito.length > 0 && 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          {carrito.length}
        </span>
      }
    </>
  );
};

export default Badge;
