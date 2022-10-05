import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import consultarAPI from "../../utilities/funciones_utiles";
import Carousel from "../layout/carousel/carousel";

const DetailItem = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  console.log("parametro", id)
  useEffect(() => {
    consultarAPI().then((productos) => {
      const prodBuscado = productos.find(
        (productoArray) => productoArray.id === parseInt(id)
      );
      console.log("lala", prodBuscado);
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
                <h5 className="card-title text-primary">{producto.title}</h5>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailItem;
