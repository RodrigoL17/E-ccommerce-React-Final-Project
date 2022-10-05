import React from 'react';
const CarouselItem = ({imagen,titulo,id}) => {
    return (
          <div className="carousel-item" key={`${id}`}>
            <img src={imagen} className="d-block w-100 card-img" alt={titulo}/>
          </div>  
    );
}

export default CarouselItem;
