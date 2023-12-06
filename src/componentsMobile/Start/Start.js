import styles from "./Start.module.scss";

const Start = () => {
  return (
    <div className={styles.StartWrapper}>
     
  
      <img alt ='test'  className={styles.StartText2}
        style={{ width: "100%" }}
        src={
          "https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/400573533_6689668707818388_4557202673504254462_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=jL0BM9RenDIAX_RxD2h&_nc_ht=scontent.fsof9-1.fna&oh=00_AfCvbEZ4ESndu3mUflE89btnzzRZ-_sMBNKTcxviZ8HTBg&oe=6575C948"
        }
      />
    </div>
  );
};

export default Start;
