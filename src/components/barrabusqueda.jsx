import React from "react";

const Barrabusqueda = ({busqueda}) => {
  return (
    <>
      <form className="d-flex ms-4">
        <input
          className="form-control me-sm-2 py-2"
          type="text"
          placeholder= {busqueda}
        />
        <button className="btn btn-light my-1 my-sm-0 py-2" type="submit">
          {busqueda}
        </button>
      </form>
    </>
  );
};

export default Barrabusqueda;
