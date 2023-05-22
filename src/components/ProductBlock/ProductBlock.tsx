import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PlusIcon from '../../assets/plusIcon';
import { addItem } from '../../core/redux/cart/slice';
import { ICartItem } from '../../core/redux/cart/types';
import { useAppSelector, useAppDispatch } from '../../core/redux/store';
import { Button } from '../Button';
import styles from './ProductBlock.module.scss';

interface ProductBlockProps {
  id: string;
  title: string;
  image: string;
  types?: number[];
  sizes?: number[];
  price: number;
  description: string;
}

function ProductBlock(props: ProductBlockProps) {
    const location = useLocation();

  let { id, title, image, types, sizes, price, description } = props;

  const typeName = ['Тонкое', 'Традиционное'];

  const [activeType, setActiveType] = useState(types?.[0] === 0 ? 0 : 1);
  const [activeSize, setActiveSize] = useState(0);

  const type = typeName[activeType];
  const size = sizes?.[activeSize];
  const itemId = id + type + size;

  const cartItem = useAppSelector((state) =>
    state.cart.items.find((item) => item.itemId === itemId),
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const dispacth = useAppDispatch();

  const onClickAdd = () => {
    const item: ICartItem = {
      itemId,
      title,
      image,
      price,
      type,
      size,
      count: 1,
    };
    dispacth(addItem(item));
  };

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
      <Link to={`/product/${id}`} state={{background: location}}>
        <img src={image} alt="ProductImg" />
        <h4 className={styles.productBlockTitle}>{title}</h4>
      </Link>
      <p>{description}</p>
      <div className={styles.productBlockSelector}>
        <ul>
          {types &&
            types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => onClickType(typeId)}
                className={setActiveTypeStyle(typeId)}
              >
                {typeName[typeId]}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => onClickSize(index)}
                className={setActiveSizeStyle(index)}
              >
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.productBlockBottom}>
        <div className={styles.productBlockPrice}>от {price} ₽</div>
        <Button
          action={onClickAdd}
          classNames={styles.buttonAdd}
          type="button"
          outlined
        >
          <PlusIcon />
          <span>В корзину</span>
        </Button>
        {addedCount > 0 && <i>{addedCount}</i>}
      </div>
    </div>
  );
}

export default ProductBlock;
