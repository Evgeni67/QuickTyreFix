import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.ContactPhone}>
        <a
          href="tel:+359893228788"
          className={styles.PhoneLink}
          style={{ color: "white", textDecoration: "none" }}
        >
          +359 893 228 788
        </a>
      </div>
      <span className={styles.Text} id="call-now">
        Обадете се сега
      </span>
      <div className={styles.ContactPhone}>
        <a
          href="tel:+359896749937"
          className={styles.PhoneLink}
          style={{ color: "white", textDecoration: "none" }}
        >
          +359 896 749 937
        </a>
      </div>
    </footer>
  );
};

export default Footer;
