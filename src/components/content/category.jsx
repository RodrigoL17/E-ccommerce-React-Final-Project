import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../utilities/firebase";
import Card from "../layout/card";

const Category = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    getProductos().then((prods) => {
      const resultado = prods.filter(
        (prod) => prod[1].category === categoria.toLowerCase()
      );
      setProductos(resultado);
    });
  }, [categoria]);

  return (
    <div className="row list-item-container">
      {productos.map((prod) => (
        <Card
          img={prod[1].images}
          titulo={prod[1].title}
          marca={prod[1].brand}
          precio={prod[1].price}
          id={prod[0]}
          key={prod[1].id}
        />
      ))}
    </div>
  );
};

export default Category;
