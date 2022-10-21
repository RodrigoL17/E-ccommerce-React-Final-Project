import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/carritoContext";
import CartCard from "../layout/cart/cart-card";
import { consultarAPI } from "../../utilities/funciones_utiles";

const Carrito = () => {
  const { carrito } = useContext(CarritoContext);
  const [carritoLocal, setCarritoLocal] = useState(carrito);
  // useEffect(() => {
  //   consultarAPI().then(productos => {
  //     const productosFiltrados = productos.filter(producto => producto.id == carritoLocal.find(prod => prod.id == producto.id).id)
  //   })
  // }, []);
  return (
    <>
      <CartCard/>
    </>
  );
};

export default Carrito;
