import React, { useRef } from "react";

import Header from "../header/Header";
import Start from "../Start/Start";
import Services from "../services/Services";
import Reviews from "../Reviews/Reviews";

import styles from "./DesktopLayout.module.scss";
import PriceList from "../../molecules/priceList/PriceList";

const DesktopLayout = () => {
  const targetElementServicesRef = useRef(null);
  const targetElementPricesRef = useRef(null);
  const targetElementReviewsRef = useRef(null);

  const scrollToElement = (element) => {
    if (targetElementServicesRef.current) {
      if (element === "services") {
        targetElementServicesRef.current.scrollIntoView({
          behavior: "smooth", // You can use 'auto' or 'smooth' for smooth scrolling
          block: "start", // You can use 'start', 'center', 'end', or 'nearest'
        });
      } else if (element === "prices") {
        targetElementPricesRef.current.scrollIntoView({
          behavior: "smooth", // You can use 'auto' or 'smooth' for smooth scrolling
          block: "start", // You can use 'start', 'center', 'end', or 'nearest'
        });
      } else {
        targetElementReviewsRef.current.scrollIntoView({
          behavior: "smooth", // You can use 'auto' or 'smooth' for smooth scrolling
          block: "start", // You can use 'start', 'center', 'end', or 'nearest'
        });
      }
    }
  };

  return (
    <div className={styles.DesktopWrapper}>
      <Header scrollToElement={scrollToElement} />
      <Start />
      <Services targetElementRef={targetElementServicesRef} />
      <PriceList targetElementRef={targetElementPricesRef} />
      <Reviews targetElementRef={targetElementReviewsRef} />
    </div>
  );
};

export default DesktopLayout;
