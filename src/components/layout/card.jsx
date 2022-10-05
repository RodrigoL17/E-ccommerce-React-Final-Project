import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../layout/carousel/carousel";
const Card = ({img,titulo,marca,precio,id}) => {
  return (
      <div className="card card-producto" key={`${id}`}>
        <Carousel images={img} title={titulo} id={id}/>
        <div className="card-body">
          <h5 className="card-title text-primary">{titulo}</h5>
          <p className="card-text">Marca: <span className="marca">{marca}</span></p>
          <p className="card-text">Precio: <span className="precio">${precio}</span></p>
          <button className="btn btn-outline-primary btn-sm card-btn">
            <Link className="btn-ver-detalle" to={`/Producto/${id}`}>Ver detalle</Link> 
          </button>
        </div>
      </div>
  );
};

export default Card;
