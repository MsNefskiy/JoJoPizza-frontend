import styles from './CartButton.module.scss';
import styleButton from '../Button/Button.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../core/redux/store';
import CartIcon from '../../assets/cartIcon';
import { Button } from '../Button';

export default function CartButton() {
  const { totalCount, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div className={styles.container}>
        {/* <Button classNames={styles.cart}>
          <span>{totalPrice}</span>
          <div className={styleButton.buttonDelimiter}></div>
          <CartIcon />
          <span>{totalCount}</span>
        </Button> */}
      <Link
        to="cart"
        className={cn(styleButton.button, styleButton.buttonCart)}
      >
        <span>{totalPrice}</span>
        <div className={styles.delimiter}></div>
        <CartIcon />
        <span>{totalCount}</span>
      </Link>
    </div>
  );
}
