import styles from "./Start.module.scss";
import FlairImage from "../../../assets/images/flair2.jpg";
import BackgroundImage2 from "../../../assets/images/backgroundImage2.jpg";

const Start = () => {
  return (
    <div className={styles.StartWrapper}>
      <img alt="test" className={styles.StartImage} src={BackgroundImage2} />
      <img
          alt="test"
          className={styles.StartText2}
          style={{ width: "410px" }}
          src={FlairImage}
        />
      {/* <div clasName = {styles.FlairWrapper}>
        <a href="tel:+359893228788">
          <button className={styles.Btn}>0893228788 </button>
        </a>
        <a href="tel:+359896749937">
          <button className={styles.Btn}>0896749937 </button>
        </a>
      </div> */}
    </div>
  );
};

export default Start;
