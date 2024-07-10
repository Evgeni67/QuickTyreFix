import React from "react";
import styles from "./Reviews.module.scss"; // Import the Sass file for styling

const Reviews = ({ targetElementRef }) => {
  const reviews = [
    {
      id: 1,
      text: "„Изключително бърза и професионална смяна на гуми. Много удобна услуга- без висене пред сервизи за смяна на гуми“",
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
    <section className={styles.reviewsContainer} ref={targetElementRef}>
      <div className={styles.reviewsContainerLeft}>
        {reviews.map((review) => (
          <article key={review.id} className={styles.reviewCard}>
            <img
              alt="Five-star rating"
              className={styles.snimkaKaka}
              src="https://mobilexpert-gumi.com/wp-content/uploads/2019/12/stars-5.png"
            />
            <p className={styles.reviewText}>{review.text}</p>
          </article>
        ))}
      </div>
      <div className={styles.reviewsContainerRight}>
        <img
          alt="Mobile expert tire service"
          src="https://mobilexpert-gumi.com/wp-content/uploads/2019/12/GUMI.jpg"
          className={styles.ImageReview}
        />
      </div>
    </section>
  );
};

export default Reviews;
