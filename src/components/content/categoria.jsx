import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import consultarAPI from "../../utilities/funciones_utiles";
import Card from "../layout/card";

const Categoria = () => {
  const [productos, setProductos] = useState([]);
  const {categoria} = useParams()
  useEffect(() => {
   consultarAPI().then(prod => {
    const resultado = prod.filter(producto => producto.category === categoria.toLowerCase())
    setProductos(resultado)
   })
  }, []);

  return (
    <div className="row list-item-container">
      {productos.map(
        ({ images, title, brand, description, price, stock, id }) => (
          <Card
            img={images}
            titulo={title}
            marca={brand}
            descripcion={description}
            precio={price}
            stock={stock}
            id={id}
          />
        )
      )}
    </div>
  );
};

export default Categoria;
