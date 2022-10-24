import React, {useState, createContext, useEffect} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
   
    const agregarAlCarrito = (prod, cant) => {
        const aux = carrito
     let indice = aux.findIndex(producto => producto.id == prod.id)
     
     if (indice != -1){
        aux[indice].cantidad = cant
     } else {
        const prodCarrito = {...prod, cantidad: cant}
        aux.push(prodCarrito)
     }
     setCarrito([...aux])
    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id == prod.id)
        aux.splice(indice,1)
        setCarrito([...aux]) 
    }


    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarAlCarrito, quitarProducto}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoProvider, CarritoContext};
