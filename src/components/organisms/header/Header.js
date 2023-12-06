import styles from "./Header.module.scss";

const Header = ({ scrollToElement }) => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.HeaderTextEl1}>Денонощен Мобилен Сервиз Гуми</div>
      <div className={styles.HeaderNavigator}>
        <div
          className={styles.HeaderTextEl}
          onClick={() => scrollToElement("prices")}
        >
          Цени
        </div>
        <div
          className={styles.HeaderTextEl}
          onClick={() => scrollToElement("services")}
        >
          Услуги
        </div>
        <div
          className={styles.HeaderTextEl}
          onClick={() => scrollToElement("reviews")}
        >
          Ревюта
        </div>
      </div>
    </div>
  );
};

export default Header;
