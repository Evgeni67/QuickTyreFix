import styles from "./Header.module.scss";
import { useState } from "react";

const Header = ({ scrollToElement }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.HeaderTextEl1}>Мобилен Сервиз Гуми</div>
      {/* <div className={styles.HeaderNavigator}>
        Спестете като време така и пари, колата ви ще го оцени
      </div> */}
      <img
        alt="test"
        className={styles.burgerMenuIcon}
        onClick={() => setIsBurgerOpen((prev) => !prev)}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        }
      />

      {isBurgerOpen ? (
        <div className={styles.BurgerMenu}>
          <div
            className={styles.Text}
            onClick={() => scrollToElement("prices")}
          >
            Цени
          </div>
          <div
            className={styles.Text}
            onClick={() => scrollToElement("services")}
          >
            Услуги
          </div>
          <div
            className={styles.Text}
            onClick={() => scrollToElement("reviews")}
          >
            Ревюта
          </div>
          <div
            className={styles.Text}
            onClick={() => scrollToElement("footer")}
          >
            Контакти
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
