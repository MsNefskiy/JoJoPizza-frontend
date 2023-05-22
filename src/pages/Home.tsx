import { useEffect } from 'react';

import Categories from '../components/Categories/Categories';
import ProductBlock from '../components/ProductBlock/ProductBlock';
import Sort from '../components/Sort/Sort';
import { Status } from '../core/constants/status';
import { fetchProducts } from '../core/redux/product/asyncActions';
import { useAppDispatch, useAppSelector } from '../core/redux/store';
import '../style/index.scss';

function Home() {
  const { items, status } = useAppSelector((state) => state.product);
  const dispacth = useAppDispatch();

  const products = items.map((product) => (
    <ProductBlock
      key={product['_id']}
      id={product['_id']}
      title={product.title}
      image={product.image}
      types={product.specifications.types}
      sizes={product.specifications.sizes}
      price={product.price}
      description={
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nam enim possimus.'
      }
    />
  ));

  const getMenu = () => {
    dispacth(fetchProducts());
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className="container">
        <div className="menu-title">
          <span>Наше Меню</span>
        </div>
        <div className="content__top">
          <Categories />
          {/* <Sort /> */}
        </div>
        {status === Status.ERROR ? (
          <div>Ошибочка вышла...</div>
        ) : (
          <div className="content__items">
            {status === Status.LOADING ? <p>Идёт загрузка...</p> : products}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
