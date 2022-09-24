import React from 'react';
import CarouselItem from './carousel-item';


const Carousel = ({img,id,title}) => {

    return (
      <div id={`carouselExampleControls${id}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img[0]} className="d-block w-100 card-img" alt={title} />
          </div>
          <div className="carousel-item">
            <img src={img[1]} className="d-block w-100 card-img" alt={title} />
          </div>  
          <div className="carousel-item">
            <img src={img[2]} className="d-block w-100 card-img" alt={title} />
          </div>  
          <div className="carousel-item">
            <img src={img[3]} className="d-block w-100 card-img" alt={title} />
          </div>  
          <div className="carousel-item">
            <img src={img[4]} className="d-block w-100 card-img" alt={title} />
          </div>  
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden ">Next</span>
        </button>
      </div>  
    );
}

export default Carousel;
