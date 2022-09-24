import React from 'react';
const CarouselItem = ({img,titulo}) => {
    return (
          <div className="carousel-item">
            <img src={img} className="d-block w-100 card-img" alt={titulo} />
          </div>  
    );
}

export default CarouselItem;
