import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { confirmacionDeCompra } from '../../utilities/funciones_utiles';
import { CarritoContext } from '../../context/carritoContext';

const Checkout = () => {
    const {vaciarCarrito} = useContext(CarritoContext);

    return (
        <>
             <div className="col-11 ms-5 mt-5 mb-5 formulario">
        <h2 className="text-center text-primary">Para finalizar tu compra completa los siguientes datos</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-primary">
           Nombre
          </label>
          <input
            type="email"
            className="form-control text-dark input-contacto"
            id="exampleFormControlInput1"
            placeholder="Rodrigo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-primary">
            Apellido
          </label>
          <input
            type="email"
            className="form-control text-dark input-contacto"
            id="exampleFormControlInput1"
            placeholder="Lezama"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-primary">
            Dirección de Mail
          </label>
          <input
            type="email"
            className="form-control text-dark input-contacto"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-primary">
            Confirmación Mail
          </label>
          <input
            type="email"
            className="form-control text-dark input-contacto"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label text-primary">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control text-dark input-contacto"
            id="exampleFormControlInput2"
            placeholder="+54 911 1234 - 5678"
          />
        </div>
        <div className="botones-formulario">
        <Link type="button" className="btn btn-outline-primary" to="/Carrito">Volver</Link>
        <Link type="button" className="btn btn-outline-primary" onClick={() => {confirmacionDeCompra(); vaciarCarrito();
 }} to="/">Finalizar Compra</Link>
        </div>
      </div>
        </>
    );
}

export default Checkout;
