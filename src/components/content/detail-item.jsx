import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../utilities/firebase";
import Carousel from "../layout/carousel/carousel";
import Rating from "../layout/Rating/rating";
import ButtonGroup from "../layout/button-group";


const DetailItem = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  
  useEffect(() => {
    getProducto(id).then((prod) => 
    setProducto([prod.id, prod.data()]))
  }, []);


  return (
    <>
      {producto && (
        <div className="card card-detalle">
          <div className="row">
            <div className="col-5">
              <Carousel
                images={producto[1].images}
                id={producto[0]}
                title={producto[1].title}
              />
            </div>
            <div className="col-7">
              <div className="card-body">
                <h3 className="card-title text-primary">{producto[1].title}</h3>
                <p className="card-text">
                  Valoracion:{" "}
                  <span className="precio text-primary">{producto[1].rating}</span>{" "}
                  <Rating rating={producto[1].rating} nombre={producto[1].title}/>
                </p>
                <p className="card-text">
                  Marca:{" "}
                  <span className="marca text-primary">{producto[1].brand}</span>
                </p>
                <p className="card-text">
                  Descripcion:{" "}
                  <span className="descripcion">{producto[1].description}</span>
                </p>
                <p className="card-text">
                  Precio:{" "}
                  <span className="precio text-primary">${producto[1].price}</span>
                </p>
                <p className="card-text">
                  <small>
                    Stock:{" "}
                    <span className="stock text-primary">{producto[1].stock}</span>
                  </small>
                </p>
                <div>
                  <ButtonGroup stock={producto[1].stock} producto={producto[1]}/>
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
