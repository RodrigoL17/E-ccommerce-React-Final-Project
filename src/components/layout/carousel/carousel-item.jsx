import React from 'react';
const CarouselItem = ({imagen,titulo}) => {
    return (
          <div className="carousel-item">
            <img src={imagen} className="d-block w-100 card-img" alt={titulo}/>
          </div>  
    );
}

export default CarouselItem;
