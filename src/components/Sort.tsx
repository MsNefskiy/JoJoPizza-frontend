import { useState } from 'react';
import styles from '../scss/components/Sort.module.scss';

function Sort() {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedSortItem, setSortItem] = useState(0);

  const listItems = ['популярности', 'цене', 'алфавиту'];
  const sortItem = listItems[selectedSortItem];

  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };

  const onClickListItem = (index: number) => {
    setSortItem(index);
    setOpenPopup(false);
  };

  const setSelectedItemStyle = (index: number) => {
    return selectedSortItem === index ? styles.activeListItem : '';
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => onClickPopup()}>{sortItem}</span>
      </div>
      {openPopup && (
        <div className={styles.sortPopup}>
          <ul>
            {listItems.map((listItem, index) => (
              <li onClick={() => onClickListItem(index)} className={setSelectedItemStyle(index)}>
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
