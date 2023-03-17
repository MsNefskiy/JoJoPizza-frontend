import styles from "./Search.module.scss";
import cross from '../../assets/cross.svg'

function Search() {
  return (
    <div className={styles.root}>
      <input className={styles.search} type="text" placeholder="Поиск...." />
      <img className={styles.cross} src={cross} alt="cross" />
    </div>
  );
}

export default Search;
