import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './star_rating.css';

const StarRatingInput = ({ value, onChange }) => {
  const [rating, setRating] = useState(value);

  const handleClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <div class="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          style={{ cursor: 'pointer', fontSize: '24px'}}
        >
          {star <= rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default StarRatingInput;
