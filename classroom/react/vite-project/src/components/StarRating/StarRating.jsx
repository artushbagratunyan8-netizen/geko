import React from 'react';
import styles from './StarRating.module.css';

const StarIcon = ({ filled }) => {
  return (
    <svg 
      className={`${styles.star} ${filled ? styles.filled : styles.empty}`}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
  );
};

const StarRating = ({ rating = 4, totalStars = 5 }) => {
  return (
    <div className={styles.ratingContainer}>
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <StarIcon 
            key={index} 
            filled={starNumber <= rating} 
          />
        );
      })}
    </div>
  );
};

export default StarRating;