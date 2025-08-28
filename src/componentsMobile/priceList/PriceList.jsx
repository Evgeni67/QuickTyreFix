import styles from "./PriceList.module.scss";
import price1 from '../../assets/images/1.png'
import price2 from '../../assets/images/2.png'

const PriceList = ({ targetElementRef, mobile }) => {
  return (
    <div className={styles.MainTable} ref={targetElementRef}>
      <div className={styles.Cenorazpis}> Ценоразпис</div>
            <div className={styles.Cenorazpis}> Леки автомобили</div>

      <img alt="guma" src={price1} style={{borderRadius:'6px'}}/>
                  <div className={styles.Cenorazpis}> Джип / SUV / Бус</div>

      <img alt="guma" src={price2} style={{borderRadius:'6px'}}/>

      {/* <div className={styles.PriceListWrapper}>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Размер</div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            13"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            14"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            15"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            16"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            17"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            18"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            19"
          </div>
          <div className={styles.SmallColumn} style={{ color: "#E31E27" }}>
            20"
          </div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Лек автомобил - цени</div>
          <div className={styles.SmallColumn}>12</div>
          <div className={styles.SmallColumn}>12</div>
          <div className={styles.SmallColumn}>14</div>
          <div className={styles.SmallColumn}>15</div>
          <div className={styles.SmallColumn}>17</div>
          <div className={styles.SmallColumn}>19</div>
          <div className={styles.SmallColumn}>22</div>
          <div className={styles.SmallColumn}>25</div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Джип - цени</div>
          <div className={styles.SmallColumn}>*</div>
          <div className={styles.SmallColumn}>*</div>
          <div className={styles.SmallColumn}>18</div>
          <div className={styles.SmallColumn}>20</div>
          <div className={styles.SmallColumn}>21</div>
          <div className={styles.SmallColumn}>23</div>
          <div className={styles.SmallColumn}>28</div>
          <div className={styles.SmallColumn}>31</div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Бус - цени</div>
          <div className={styles.SmallColumn}>*</div>
          <div className={styles.SmallColumn}>*</div>
          <div className={styles.SmallColumn}>22</div>
          <div className={styles.SmallColumn}>22</div>
          <div className={styles.SmallColumn}>22</div>
          <div className={styles.SmallColumn}>*</div>
          <div className={styles.SmallColumn}>*</div>
          <div className={styles.SmallColumn}>*</div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Сваляне / качване</div>
          <div className={styles.SmallColumn}>5</div>
          <div className={styles.SmallColumn}>5</div>
          <div className={styles.SmallColumn}>5</div>
          <div className={styles.SmallColumn}>7</div>
          <div className={styles.SmallColumn}>8</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Сваляне / качване бус и джип </div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Баланс автомобил </div>
          <div className={styles.SmallColumn}>7</div>
          <div className={styles.SmallColumn}>7</div>
          <div className={styles.SmallColumn}>7</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>12</div>
          <div className={styles.SmallColumn}>12</div>
          <div className={styles.SmallColumn}>12</div>
        </div>
        <div className={styles.InfoRow}>
          <div className={styles.TextColumn}>Баланс джип/бус </div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
          <div className={styles.SmallColumn}>10</div>
        </div>
      </div> */}
      <div
        className={styles.AdditionalText}
        style={{ fontWeight: "bold", marginTop: "12px" }}
      >
        За гуми RUN FLAT +50% от обявената цена.
      </div>
      <div className={styles.KonsumativiWrapper}>
        <div className={styles.Prices}>Цени Консумативи</div>

        <div className={styles.InfoRowPrices}>
          <div className={styles.text}>Студена лепенка</div>
          <div className={styles.price}> 10 лева</div>
        </div>
        <div className={styles.InfoRowPrices}>
          <div className={styles.text}>Подложка</div>
          <div className={styles.price}> 15 лева</div>
        </div>
        <div className={styles.InfoRowPrices}>
          <div className={styles.text}> Шило-фитил-пура</div>
          <div className={styles.price}> 10 лева</div>
        </div>
        <div className={styles.InfoRowPrices}>
          <div className={styles.text}>Почистване на джанта</div>
          <div className={styles.price}>5 лева</div>
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
        За аварийни и спешни повиквания в диапазона от 18:00ч. До 08:00ч. +50%
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
