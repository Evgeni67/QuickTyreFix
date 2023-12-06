import styles from "./Services.module.scss";

const Services = ({ targetElementRef }) => {
  return (
    <div className={styles.ServicesWrapper} ref={targetElementRef}>
      <div className={styles.ServicesHeader}>Услуги</div>
      <div className={styles.ServicesWrapper2}>
        <div className={styles.Service}>
          <img
            src={
              "https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/400960152_122103868934110651_5912457385210075608_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kAzJy4LMB7wAX83X7Cx&_nc_ht=scontent.fsof9-1.fna&oh=00_AfB1OfCaCVQNLqebg1QPTQKCV37eVojgfkhY5GSyxL-S4A&oe=6576651E"
            }
            className={styles.HeaderImage}
          />
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
          <img
            src={
              "https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/400886766_122103869762110651_7721496580302548639_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=INP_YjYV5N8AX9Jy1qa&_nc_oc=AQnQLEwK95EUPgqTavy2johZ42ea5m3uyTLRoz0G9qM1IHoHa92JAs5ZU8yfFQCO_Ko&_nc_ht=scontent.fsof9-1.fna&oh=00_AfC2liCkfyDvEcHdlSeHtW4UzhEhvyIEE346IslshdzwYQ&oe=65758C8D"
            }
            className={styles.HeaderImage}
          />
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
