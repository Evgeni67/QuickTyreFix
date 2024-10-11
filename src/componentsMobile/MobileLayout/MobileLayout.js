import React, { useRef } from "react";

import PriceList from "../priceList/PriceList";
import Header from "../Header/Header";
import Start from "../Start/Start";
import Services from "../services/Services";

import styles from "./MobileLayout.module.scss";
import Footer from "../footer/Footer";

const MobileLayout = () => {
  const targetElementServicesRef = useRef(null);
  const targetElementPricesRef = useRef(null);
  const targetElementReviewsRef = useRef(null);
  const targetElementFooterRef = useRef(null);

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
      } else if ((element = "footer")) {
        targetElementFooterRef.current.scrollIntoView({
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
    <div className={styles.MobileWrapper}>
      <Header scrollToElement={scrollToElement} />
      <Start />
      <Services targetElementRef={targetElementServicesRef} />
      <PriceList targetElementRef={targetElementPricesRef} />
      <Footer targetElementRef={targetElementFooterRef} />
    </div>
  );
};

export default MobileLayout;
