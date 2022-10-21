import React from "react";

const CartCard = () => {
  return (
    <>
      <div className="card card-producto">
        <img src="" alt="" />
        <div className="card-body">
          <h5 className="card-title text-primary"></h5>
          <p className="card-text">
            Marca: <span className="marca"></span>
          </p>
          <p className="card-text">
            Precio: <span className="precio"></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartCard;
