import styles from "./Header.module.scss";

const Header = ({ scrollToElement }) => {
  return (
    <div className={styles.HeaderWrapper}>
      <h1 className={styles.HeaderTextEl1}>Денонощен Мобилен Сервиз Гуми</h1>
      <div className={styles.HeaderNavigator}>
        <button
          className={styles.HeaderTextEl}
          onClick={() => scrollToElement("prices")}
        >
          Цени
        </button>
        <button
          className={styles.HeaderTextEl}
          onClick={() => scrollToElement("services")}
        >
          Услуги
        </button>
        <button
          className={styles.HeaderTextEl}
          onClick={() => scrollToElement("reviews")}
        >
          Ревюта
        </button>
      </div>
    </div>
  );
};

export default Header;
