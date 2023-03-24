import styles from "../scss/components/Categories.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCategoryId } from "../redux/filter/slice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const dispacth = useAppDispatch();
  const categoryId = useAppSelector((state) => state.filter.categoryId);

  const onClickCategory = (index: number) => {
    dispacth(setCategoryId(index));
  };

  const setActiveCategoryStyle = (index: number) => {
    return categoryId === index ? styles.Active : "";
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={setActiveCategoryStyle(index)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
