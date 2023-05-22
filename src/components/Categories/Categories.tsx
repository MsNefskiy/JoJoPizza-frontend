import { CategoryItems } from '../../core/constants/categories';
import { setCategoryId } from '../../core/redux/filter/slice';
import { useAppDispatch, useAppSelector } from '../../core/redux/store';
import styles from './Categories.module.scss';

function Categories() {
  const dispacth = useAppDispatch();
  const categoryId = useAppSelector((state) => state.filter.categoryId);

  const onClickCategory = (index: number) => {
    dispacth(setCategoryId(index));
  };

  const setActiveCategoryStyle = (index: number) => {
    return categoryId === index ? styles.Active : '';
  };

  return (
    <div className={styles.categories}>
      <ul>
        {CategoryItems.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={setActiveCategoryStyle(index)}
          >
            <img src={value.icon} />
            <span> {value.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
