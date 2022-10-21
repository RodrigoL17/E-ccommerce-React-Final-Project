import React from "react";
const Rating = ({rating}) => {
    const renderStars = (rating) => {
        let i = 0;
        const numberOfStars = 5;
        const numberOfFullStars = Math.floor(rating);
        const hasHalfStar = (rating % 1)> 0.5;
        let stars = [];
      
        for (i; i < numberOfFullStars; i++) {
          stars.push(<i className="bi bi-star-fill" key={i}></i>);
        }
        if (hasHalfStar) {
          stars.push(<i className="bi bi-star-half" key={i}></i>);
          i++;
        }
        for (i; i < numberOfStars; i++) {
          stars.push(<i className="bi bi-star" key={i}></i>);
        }
      
        return stars;
      };
   return (
    <span>
        {renderStars(rating)}
    </span>
    
  );
};

export default Rating;
