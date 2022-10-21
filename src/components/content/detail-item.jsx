import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { consultarAPI } from "../../utilities/funciones_utiles";
import Carousel from "../layout/carousel/carousel";
import Rating from "../layout/Rating/rating";
import ButtonGroup from "../layout/button-group";


const DetailItem = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  
  useEffect(() => {
    consultarAPI().then((productos) => {
      const prodBuscado = productos.find(
        (productoArray) => productoArray.id === parseInt(id)
      );
      setProducto(prodBuscado);
    });
  }, []);


  return (
    <>
      {producto && (
        <div className="card card-detalle">
          <div className="row">
            <div className="col-5">
              <Carousel
                images={producto.images}
                id={producto.id}
                title={producto.title}
              />
            </div>
            <div className="col-7">
              <div className="card-body">
                <h3 className="card-title text-primary">{producto.title}</h3>
                <p className="card-text">
                  Valoracion:{" "}
                  <span className="precio text-primary">{producto.rating}</span>{" "}
                  <Rating rating={producto.rating} nombre={producto.title}/>
                </p>
                <p className="card-text">
                  Marca:{" "}
                  <span className="marca text-primary">{producto.brand}</span>
                </p>
                <p className="card-text">
                  Descripcion:{" "}
                  <span className="descripcion">{producto.description}</span>
                </p>
                <p className="card-text">
                  Precio:{" "}
                  <span className="precio text-primary">${producto.price}</span>
                </p>
                <p className="card-text">
                  <small>
                    Stock:{" "}
                    <span className="stock text-primary">{producto.stock}</span>
                  </small>
                </p>
                <div>
                  <ButtonGroup stock={producto.stock} producto={producto}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailItem;
