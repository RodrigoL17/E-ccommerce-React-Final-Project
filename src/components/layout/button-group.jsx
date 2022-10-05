import React,{useState} from "react";

const ButtonGroup = ({stock}) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1){
            setContador(contador - 1)
        }
        console.log("pedo")
    }

  return (
    
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={restar}>
          -
        </button>
        <input className="form-control form-control-sm text-center" type="number"  id="inputSmall" value={contador}/>
        <button type="button" className="btn btn-outline-primary btn-sm" onClick={sumar}>
          +
        </button>
      </div>
  );
};

export default ButtonGroup;
