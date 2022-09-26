import React, {useState} from 'react';
import CarouselItem from './carousel-item';


const Carousel = ({images,id,title}) => {
    const eliminado = images.splice(0,1)
    const [imagenes, setstate] = useState(images);
    return (
      <div id={`carouselExampleControls${id}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={eliminado} className="d-block w-100 card-img" alt={title} />
          </div>
          {imagenes.map((image) => <CarouselItem imagen={image} titulo={title}/>)}
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
