import React, { useState, useEffect } from "react";
import consultarAPI from "../../utilities/funciones_utiles";
import Card from "../layout/card";

const ListItemContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarAPI().then(prod => {
      setProductos(prod)});
  }, []);
  return (
    <div className="row list-item-container">
      {productos?.map(({ images, title, brand, description, price, stock,id }) => (
        <Card
          img={images}
          titulo={title}
          marca={brand}
          descripcion={description}
          precio={price}
          stock={stock}
          id={id}
        />
      ))}
    </div>
  );
};

export default ListItemContainer;
