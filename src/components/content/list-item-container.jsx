import React, { useState, useEffect } from "react";
import { getProductos } from "../../utilities/firebase";
import Card from "../layout/card";

const ListItemContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((prods) => {
      const products = prods.map((prod) => (
        <Card
          img={prod[1].images}
          titulo={prod[1].title}
          marca={prod[1].brand}
          precio={prod[1].price}
          id={prod[0]}
          key={prod[1].id}
        />
      ));
      setProductos(products);
    });
  }, []);
  return <div className="row list-item-container">{productos}</div>;
};

export default ListItemContainer;
