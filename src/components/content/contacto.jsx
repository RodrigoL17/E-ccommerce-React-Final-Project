import React from "react";

const Contacto = () => {
  return (
      <div className="col-9 ms-5 mt-5 formulario">
        <h2 className="text-center text-primary">Contactanos</h2>
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
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label text-primary">
            Mensaje
          </label>
          <textarea
            className="form-control text-dark input-contacto"
            id="exampleFormControlTextarea1"
            rows={8}
            defaultValue={""}
          />
        </div>
        <div className="botones-formulario">
        <button type="button" className="btn btn-outline-primary btn-sm">Enviar</button>
        <button type="button" className="btn btn-outline-primary btn-sm">Borrar Todo</button>
        </div>
      </div>
  );
};

export default Contacto;
