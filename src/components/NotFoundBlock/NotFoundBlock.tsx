import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>:(</span>
      <br />
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>
        Данная страница отсутствует на нашем сайте
      </p>
    </div>
  );
}

export default NotFoundBlock;
