import React, { useState, useEffect } from "react";
import { getProductos } from "../../utilities/firebase";
import Card from "../layout/card";

const ListItemContainer = () => {
  const [productos, setProductos] = useState([]);
  const [idProducto, setIdProducto] = useState([]);
  
  useEffect(() => {
    getProductos().then(prods => {
      const products = prods.map(prod => prod[1])
      setProductos(products);
      });
      
  }, []);
  return (
    <div className="row list-item-container">
      {productos?.map(({ images, title, brand, description, price, stock,id}) => (
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
      ))}
    </div>
  );
};

export default ListItemContainer;
