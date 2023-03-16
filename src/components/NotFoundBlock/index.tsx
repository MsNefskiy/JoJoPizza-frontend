import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>:(</span>
      <br />
      <h1>Ничего не найдёно</h1>
      <p className={styles.description}>
        Данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
