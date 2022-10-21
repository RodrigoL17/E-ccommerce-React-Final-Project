import React,{useState, useContext} from "react";
import { CarritoContext } from "../../context/carritoContext";

const ButtonGroup = ({stock, producto}) => {
    const [contador, setContador] = useState(1);
    const{agregarAlCarrito} = useContext (CarritoContext)

    
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1){
            setContador(contador - 1)
        }
    }

      

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-primary btn-sm signo" onClick={() => restar()}>
          -
        </button>
        <input className="form-control form-control-sm text-center cantidad" type="number"  id="inputSmall" value={contador} onChange={()=>{}} name= "cantidad"/>
        <button type="button" className="btn btn-outline-primary btn-sm signo" onClick={() => sumar()}>
          +
        </button>
      </div>
      <button type="button" className="btn btn-outline-primary btn-sm btn-agregar-carrito" data-title="Agregar al carrito" onClick={() => agregarAlCarrito(producto, contador)}><i className="bi bi-cart-plus-fill agregar-carrito"></i></button>
    </>
  );
};

export default ButtonGroup;
