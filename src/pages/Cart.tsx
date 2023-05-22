import stylesButton from '../components/Button/Button.module.scss';
import cn from 'classnames';
import '../style/index.scss';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../core/redux/store';
import { clearItems } from '../core/redux/cart/slice';
import CartIcon from '../assets/cartIcon';
import TrashIcon from '../assets/trashIcon';
import LeftArrowIcon from '../assets/leftArrowIcon';

function Cart() {
  const { items, totalPrice, totalCount } = useAppSelector(
    (state) => state.cart,
  );
  const dispacth = useAppDispatch();

  const onClearCart = () => {
    dispacth(clearItems());
  };

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            Корзина
          </h2>
          <div onClick={onClearCart} className="cart__clear">
            <TrashIcon />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {items &&
            items.map((item) => (
              <CartItem
                key={item.itemId}
                itemId={item.itemId}
                title={item.title}
                price={item.price}
                image={item.image}
                type={item.type}
                size={item.size}
                count={item.count}
              />
            ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className={cn(
                stylesButton.button,
                stylesButton.buttonOutline,
                stylesButton.buttonAdd,
                'go-back-btn',
              )}
            >
              <LeftArrowIcon />
              <span>Вернуться назад</span>
            </Link>
            <div className={cn(stylesButton.button, 'pay-btn')}>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
