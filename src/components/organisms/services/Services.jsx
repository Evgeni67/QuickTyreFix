import styles from "./Services.module.scss";

import Balance1 from "../../../assets/images/balans1.jpg";
import Balance2 from "../../../assets/images/balans2.jpg";
import BrokenTire from "../../../assets/images/brokenTire.jpg";

const services = [
  {
    image: Balance1,
    title: "Баланс на гуми",
    text: ` Балансът на гуми е процес, при който се коригират неравномерните
тегловни разпределения по гумите и джантите на превозното средство.
Това е от съществено значение за предотвратяване на вибрации при
движение и неравномерно износване на гумите. Балансът подобрява
комфорта, стабилността и сцеплението на автомобила с пътя,
осигурявайки по-голяма безопасност и удължавайки живота на гумите.
`,
  },
  {
    image: Balance2,

    title: "Смяна и продажба на гуми",
    text: `Балансът на гуми е процес, при който се коригират неравномерните
  тегловни разпределения по гумите и джантите на превозното средство.
  Това е от съществено значение за предотвратяване на вибрации при
  движение и неравномерно износване на гумите. Балансът подобрява
  комфорта, стабилността и сцеплението на автомобила с пътя,
  осигурявайки по-голяма безопасност и удължавайки живота на гумите.`,
  },
  {
    image: BrokenTire,
    title: "Ремонт на спукани гуми",
    text: `Лепенето и ремонтът на спукани гуми са важни за бърза и икономична
    корекция на повреди. Този процес осигурява безопасност, пестейки
    време и пари, като предпазва от ненужни замени на гуми. Лепенето
    подчертава ефективния начин за запазване на функционалността и
    продължителността на гумите, предоставяйки удобство и съхранявайки
    ресурси..`,
  },
];

const Services = ({ targetElementRef }) => {
  return (
    <section className={styles.ServicesWrapper} ref={targetElementRef}>
      <h1 className={styles.ServicesHeader}>Услуги</h1>
      <div className={styles.Wrapper}>
        {services?.map((service) => (
          <div className={styles.Service}>
            <img
              alt="ChangingTires"
              src={service.image}
              className={styles.HeaderImage}
            />
            <span className={styles.HeaderText}>{service?.title}</span>
            <p className={styles.DescriptionText}>{service?.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
