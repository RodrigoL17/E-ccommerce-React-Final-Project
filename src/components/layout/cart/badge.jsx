import React, { useContext, useState, useEffect } from "react";
import {CarritoContext} from "../../../context/carritoContext";

const Badge = () => {
  const {carrito} = useContext(CarritoContext);
 
  
  useEffect(() => {
    console.log("lalal",typeof carrito)
  },[]);
  
  return (
    <CarritoContext.Consumer>
      {carrito => <span>{carrito.length}</span>}
      {/* {carrito.length > 0 && 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          {carrito.length}
        </span>
      } */}
    </CarritoContext.Consumer>
  );
};

export default Badge;
