import React from "react";
import Carousel from "../carousel/carousel";
const Card = ({img,titulo,marca,precio,id}) => {
  return (
      <div className="card card-producto" key={`${id}`}>
        <Carousel images={img} title={titulo} id={id}/>
        <div className="card-body">
          <h5 className="card-title text-primary">{titulo}</h5>
          <p className="card-text">Marca: {marca}</p>
          <p className="card-text">Precio: ${precio}</p>
          <button className="btn btn-outline-primary btn-sm card-btn">
            Ver detalle
          </button>
        </div>
      </div>
  );
};

export default Card;
