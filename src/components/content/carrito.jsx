import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/carritoContext";

const Carrito = () => {
  const { carrito, quitarProducto } = useContext(CarritoContext);
  const [carritoLocal, setCarritoLocal] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sumaTotal = carrito.map(
      (prod) => parseInt(prod.price) * parseInt(prod.cantidad)
    );
    const prodMostrar = carrito.map((prod) => (
      <div className="card card-producto" key={`${prod.id}`}>
        <img src={prod.images[0]} alt={prod.title} className="card-img mt-2" />
        <div className="card-body">
          <h5 className="card-title text-primary">{prod.title}</h5>
          <p className="card-text">
            Marca: <span className="marca">{prod.brand}</span>
          </p>
          <p className="card-text">
            Precio: <span className="precio">${prod.price}</span>
          </p>
          <p className="card-text">
            Cantidad: <span className="precio">{prod.cantidad}</span>
          </p>
          <p className="card-text">
            Subtotal:{" "}
            <span className="precio">${prod.cantidad * prod.price}</span>
          </p>
        </div>
        <button
          className="btn btn-sm btn-outline-dark align-self-center mb-2"
          data-title="Eliminar del carrito"
          onClick={() => quitarProducto(prod)}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ));
    if (sumaTotal.length !== 0) {
      const valorTotal = sumaTotal.reduce((a, b) => a + b);
      setTotal(valorTotal);
    }
    setCarritoLocal(prodMostrar);
  }, [carrito]);

  return carritoLocal.length !== 0 ? (
    <>
      <div className="carrito">
        <h1 className="text-center text-primary">
          Estos son los productos de tu carrito
        </h1>
        <div className="row list-item-container">{carritoLocal}</div>
        <div className="finalizar-compra">
          <h2 className="text-center">
            Total a pagar:
            <span className="fw-bold text-primary"> ${total}</span>
          </h2>
          <Link className="btn btn-outline-primary mb-4" to="/Checkout">
            Continuar con la compra
          </Link>
        </div>
      </div>
    </>
  ) : (
    <div className="mt-3 d-flex flex-column align-items-center">
      <h2 className="text-center">El carrito está vacio</h2>
      <i className="bi bi-emoji-frown-fill"></i>
      <Link className="btn btn-outline-primary btn-sm" to="/">
        Dirigete a la tienda <i className="bi bi-house-fill"></i>
      </Link>
    </div>
  );
};

export default Carrito;
