import { useState } from 'react';
import styles from '../scss/components/Categories.module.scss';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index: number) => {
    setActiveCategory(index);
  };

  const setActiveCategoryStyle = (index: number) => {
    return activeCategory === index ? styles.Active : '';
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
