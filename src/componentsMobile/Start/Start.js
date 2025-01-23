import styles from "./Start.module.scss";
import FlairImage from "../../assets/images/flair2.jpg";

const Start = () => {
  return (
    <div className={styles.StartWrapper}>
        <img
          alt="Contact"
          className={styles.StartText2}
          style={{ width: "100%" }}
          src={FlairImage}
        />
 
    </div>
  );
};

export default Start;
