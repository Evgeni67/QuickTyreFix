import styles from "./Footer.module.scss";

const Footer = ({ targetElementRef }) => {
  return (
    <div className={styles.Footer} ref={targetElementRef}>
      <div className={styles.ContactPhone}>
        <a
          href="tel: +359893228788"
          style={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          +359 893 228 788
        </a>
      </div>
      <div className={styles.Text}>Обадете се сега</div>
      <div className={styles.ContactPhone}>
        <a
          href="tel:+359896749937"
          style={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          +359 896 749 937
        </a>
      </div>
    </div>
  );
};

export default Footer;
