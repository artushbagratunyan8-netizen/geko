import React from 'react';
import StarRating from '../StarRating/StarRating';
import styles from './InfoCard.module.css';

const InfoCard = () => {
  // Վեբից վերցված պրոֆիլի նկար (Unsplash)
  const avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

  return (
    <div className={styles.cardContainer}>
      
      {/* Վերևի բաժին՝ Ռեյտինգ և 120+ */}
      <div className={styles.topSection}>
        <div className={styles.infoLeft}>
          <p className={styles.trustText}>Trusted by 500+ riders across 4 cities</p>
          <StarRating rating={4} />
        </div>
        <h2 className={styles.statsNumber}>120+</h2>
      </div>

      <div className={styles.divider}></div>

      {/* Ներքևի բաժին՝ Կարծիք (Testimonial) */}
      <div className={styles.testimonialSection}>
        <img 
          src={avatarUrl} 
          alt="Rider Profile" 
          className={styles.avatar} 
        />
        <div className={styles.quoteContainer}>
          <span className={styles.quoteIcon}>“</span>
          <p className={styles.quoteText}>
            Good design feels obvious — because the hard work is hidden.
          </p>
          <span className={styles.authorName}>Ava Collins</span>
          <span className={styles.authorRole}>CyberBike Design Lead</span>
        </div>
      </div>

    </div>
  );
};

export default InfoCard;