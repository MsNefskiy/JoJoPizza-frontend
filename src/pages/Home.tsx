import { useEffect } from 'react';

import Categories from '../components/Categories';
import ProductBlock from '../components/ProductBlock';
import Sort from '../components/Sort';
import '../scss/app.scss';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from '../redux/product/asyncActions';
import { Status } from '../redux/product/types';

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
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <div className="content__title">Все пиццы</div>
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
