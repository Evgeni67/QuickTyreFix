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
    </div>
  );
};

export default Start;
