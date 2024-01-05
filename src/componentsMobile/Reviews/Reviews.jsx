import React from "react";
import styles from "./Reviews.module.scss"; // Import the Sass file for styling

import ReviewsImage from '../../assets/images/ReviewsImage.jpg'

const Reviews = ({ targetElementRef }) => {
  const reviews = [
    {
      id: 1,
      text: "„Изключително бърза и професионална смяна на гуми и реклаж на джанти. Много удобна услуга- без висене пред сервизи за смяна на гуми“",
    },
    {
      id: 2,
      text: "„Докато изпиеш едно кафе с приятел и работата е свършена :)“",
    },
    {
      id: 3,
      text: "“Удобството да получите гумарски услуги на място е ненадминато, осигурявайки спокойствие и временна икономия. Препоръчвам с увереност за бързо, качествено и удобно обслужване„",
    },
  ];

  return (
    <div className={styles.reviewsContainer} ref={targetElementRef}>
      <div className={styles.Text}>Ревюта</div>
      <div className={styles.reviewsContainerRight}>
        <img alt ='test' 
          src={
            ReviewsImage
          }
          className={styles.ImageReview}
        />
      </div>
      <div className={styles.reviewsContainerLeft}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <img alt ='test' 
              className={styles.snimkaKaka}
              src={
                "https://mobilexpert-gumi.com/wp-content/uploads/2019/12/stars-5.png"
              }
            />
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
