import styles from '../scss/components/ProductBlock.module.scss';
import styleButton from '../scss/components/Button.module.scss';
import cn from 'classnames';
import { useState } from 'react';

interface ProductBlockProps {
  title: string;
  image: string;
  types?: number[];
  sizes?: number[];
  price: number;
}

function ProductBlock({ title, image, types, sizes, price }: ProductBlockProps) {
  const typeName = ['Тонкое', 'Традиционное'];
  if (types === undefined) {
    types = [];
  }
  const [activeType, setActiveType] = useState(types[0] === 0 ? 0 : 1);
  const [activeSize, setActiveSize] = useState(0);

  const onClickType = (index: number) => {
    setActiveType(index);
  };

  const onClickSize = (index: number) => {
    setActiveSize(index);
  };

  const setActiveTypeStyle = (index: number) => {
    return activeType === index ? styles.active : '';
  };

  const setActiveSizeStyle = (index: number) => {
    return activeSize === index ? styles.active : '';
  };

  return (
    <div className={styles.productBlock}>
      <img src={image} alt="ProductImg" />
      <h4 className={styles.productBlockTitle}>{title}</h4>
      <div className={styles.productBlockSelector}>
        <ul>
          {types &&
            types.map((typeId) => (
              <li key={typeId} onClick={() => onClickType(typeId)} className={setActiveTypeStyle(typeId)}>
                {typeName[typeId]}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size, index) => (
              <li key={index} onClick={() => onClickSize(index)} className={setActiveSizeStyle(index)}>
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.productBlockBottom}>
        <div className={styles.productBlockPrice}>от {price} ₽</div>
        <button
          type="button"
          className={cn(styleButton.button, styleButton.buttonOutline, styleButton.buttonAdd)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>В корзину</span>
          <i>2</i>
        </button>
      </div>
    </div>
  );
}

export default ProductBlock;
