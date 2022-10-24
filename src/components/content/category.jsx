import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../utilities/firebase";
import Card from "../layout/card";

const Category = () => {
  const [productos, setProductos] = useState([]);
  const {categoria} = useParams()
  
  useEffect(() => {
   getProductos().then(prods => {
    const products = prods.map(prod => prod[1])
    const resultado = products.filter(producto => producto.category === categoria.toLowerCase())
    setProductos(resultado)
   })
  }, [categoria]);

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
            key={id}
          />
        )
      )}
    </div>
  );
};

export default Category;
