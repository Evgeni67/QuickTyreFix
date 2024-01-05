import styles from "./Services.module.scss";

import BalanceImage1 from "../../../assets/images/balans1.jpg";
import BalanceImage2 from "../../../assets/images/balans2.jpg";

const Services = ({ targetElementRef }) => {
  return (
    <div className={styles.ServicesWrapper} ref={targetElementRef}>
      <div className={styles.ServicesHeader}>Услуги</div>
      <div className={styles.ServicesWrapper2}>
        <div className={styles.Service}>
          <img alt="test" src={BalanceImage1} className={styles.HeaderImage} />
          <div className={styles.HeaderText}>Баланс на гуми</div>
          <div className={styles.DescriptionText}>
            Балансът на гуми е процес, при който се коригират неравномерните
            тегловни разпределения по гумите и джантите на превозното средство.
            Това е от съществено значение за предотвратяване на вибрации при
            движение и неравномерно износване на гумите. Балансът подобрява
            комфорта, стабилността и сцеплението на автомобила с пътя,
            осигурявайки по-голяма безопасност и удължавайки живота на гумите.
          </div>
        </div>
        <div className={styles.Service}>
          <img alt="test" src={BalanceImage2} className={styles.HeaderImage} />
          <div className={styles.HeaderText}>Смяна и продажба на гуми</div>
          <div className={styles.DescriptionText}>
            Новите гуми осигуряват по-добро сцепление, кратък спирачен път и
            по-добра устойчивост на различни пътни условия. Редовната смяна на
            гумите предпазва от неравномерно износване, осигурява по-голям
            контрол върху автомобила и поддържа оптималната работа на системите
            за управление.
          </div>
        </div>
        <div className={styles.Service}>
          <img
            alt="test"
            src={
              "https://scontent.fsof9-1.fna.fbcdn.net/v/t1.15752-9/406235059_369538848940122_7337030985318266712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=XCShxuR6LFYAX9tJIQU&_nc_ht=scontent.fsof9-1.fna&oh=03_AdTmtRvQ810OwTWQKGFDqyeidM2ogmxy0cYCP9POMqdBzw&oe=65985F0F"
            }
            className={styles.HeaderImage}
          />
          <div className={styles.HeaderText}>Ремонт на спукани гуми</div>
          <div className={styles.DescriptionText}>
            Лепенето и ремонтът на спукани гуми са важни за бърза и икономична
            корекция на повреди. Този процес осигурява безопасност, пестейки
            време и пари, като предпазва от ненужни замени на гуми. Лепенето
            подчертава ефективния начин за запазване на функционалността и
            продължителността на гумите, предоставяйки удобство и съхранявайки
            ресурси.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
