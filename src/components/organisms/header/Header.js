import styles from "./Header.module.scss";

const Header = ({ scrollToElement }) => {
  return (
    <header className={styles.HeaderWrapper}>
      <h1 className={styles.HeaderTextEl1}>Денонощен Мобилен Сервиз Гуми</h1>
      <nav className={styles.HeaderNavigator} aria-label="Main navigation">
        <ul className={styles.NavList}>
          <li className={styles.NavItem}>
            <button
              className={styles.HeaderTextEl}
              onClick={() => scrollToElement("prices")}
            >
              Цени
            </button>
          </li>
          <li className={styles.NavItem}>
            <button
              className={styles.HeaderTextEl}
              onClick={() => scrollToElement("services")}
            >
              Услуги
            </button>
          </li>
          <li className={styles.NavItem}>
            <button
              className={styles.HeaderTextEl}
              onClick={() => scrollToElement("reviews")}
            >
              Ревюта
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
