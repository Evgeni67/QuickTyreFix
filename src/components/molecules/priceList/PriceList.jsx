import styles from "./PriceList.module.scss";

const PriceList = ({ targetElementRef, mobile }) => {
  return (
    <div className={styles.MainTable} ref={targetElementRef}>
      <h1 className={styles.Cenorazpis}>Ценоразпис</h1>

      <table className={styles.PriceListWrapper}>
        <thead>
          <tr className={styles.InfoRow}>
            <th className={styles.TextColumn}>
              Размер<span className={styles.Dash}> - </span>Цолаж
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              13"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              14"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              15"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              16"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              17"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              18"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              19"
            </th>
            <th className={styles.SmallColumn} style={{ color: "#E31E27" }}>
              20"
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Лек автомобил - цени</td>
            {[12, 12, 14, 15, 17, 19, 22, 25]?.map((el) => (
              <td className={styles.SmallColumn}>{el}</td>
            ))}
          </tr>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Джип - цени</td>
            <td className={styles.SmallColumn}>*</td>
            <td className={styles.SmallColumn}>*</td>
            <td className={styles.SmallColumn}>18</td>
            <td className={styles.SmallColumn}>20</td>
            <td className={styles.SmallColumn}>21</td>
            <td className={styles.SmallColumn}>23</td>
            <td className={styles.SmallColumn}>28</td>
            <td className={styles.SmallColumn}>31</td>
          </tr>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Бус - цени</td>
            <td className={styles.SmallColumn}>*</td>
            <td className={styles.SmallColumn}>*</td>
            <td className={styles.SmallColumn}>22</td>
            <td className={styles.SmallColumn}>22</td>
            <td className={styles.SmallColumn}>22</td>
            <td className={styles.SmallColumn}>*</td>
            <td className={styles.SmallColumn}>*</td>
            <td className={styles.SmallColumn}>*</td>
          </tr>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Сваляне/качване лек автомобил</td>
            <td className={styles.SmallColumn}>5</td>
            <td className={styles.SmallColumn}>5</td>
            <td className={styles.SmallColumn}>5</td>
            <td className={styles.SmallColumn}>7</td>
            <td className={styles.SmallColumn}>8</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
          </tr>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Сваляне/качване джип/бус</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
          </tr>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Баланс лек автомобил</td>
            <td className={styles.SmallColumn}>7</td>
            <td className={styles.SmallColumn}>7</td>
            <td className={styles.SmallColumn}>7</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>12</td>
            <td className={styles.SmallColumn}>12</td>
            <td className={styles.SmallColumn}>12</td>
          </tr>
          <tr className={styles.InfoRow}>
            <td className={styles.TextColumn}>Баланс джип/бус</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
            <td className={styles.SmallColumn}>10</td>
          </tr>
        </tbody>
      </table>

      <div
        className={styles.AdditionalText}
        style={{ fontWeight: "bold", marginTop: "12px" }}
      >
        За гуми RUN FLAT +50% от обявената цена.
      </div>

      <div className={styles.KonsumativiWrapper}>
        <h2 className={styles.Prices}>Цени Консумативи</h2>
        <div className={styles.InfoRowPrices}>
          <div className={styles.Text}>Студена лепенка</div>
          <div className={styles.Price}>10 лева</div>
        </div>
        <div className={styles.InfoRowPrices}>
          <div className={styles.Text}>Подложка</div>
          <div className={styles.Price}>15 лева</div>
        </div>
        <div className={styles.InfoRowPrices}>
          <div className={styles.Text}>Шило-фитил-пура</div>
          <div className={styles.Price}>10 лева</div>
        </div>
        <div className={styles.InfoRowPrices}>
          <div className={styles.Text}>Почистване на джанта</div>
          <div className={styles.Price}> 5 лева</div>
        </div>
      </div>

      <div className={styles.AdditionalText}>
        Посещение в рамките на гр. София се таксува 25 лв.
      </div>
      <div className={styles.AdditionalText}>
        Посещение в подземни паркинги и гаражи се таксува 30 лв.
      </div>
      <div className={styles.AdditionalText}>
        Аварийни повиквания извън София-град се договарят предварително по
        телефона
      </div>
      <div
        className={styles.AdditionalText}
        style={{ fontWeight: "bold", marginTop: "5px", marginBottom: "5px" }}
      >
        За фирмени автомобили или повече от 4 бр. автомобили на един адрес за
        сезонна смяна на гуми, договаряне на цените
      </div>
      <div className={styles.AdditionalText}>
        Аварийна смяна на резервна гума - 30 лв.
      </div>
      <div className={styles.AdditionalText}>
        За аварийни и спешни повиквания в диапазона от 18:00ч. до 08:00ч. +50%
        от обявената цена
      </div>
      <div className={styles.AdditionalText}>
        Аварийни повиквания на Национални празници, Коледа и Нова година +100%
        от обявената цена
      </div>
      <div className={styles.AdditionalText}>
        Всички цени са за 1бр. в български лева
      </div>
    </div>
  );
};

export default PriceList;
