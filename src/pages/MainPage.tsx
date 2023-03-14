import Header from '../components/Header';
import ProductBlock from '../components/ProductBlock';

function MainPage() {
  return (
    <>
      <Header />
      <ProductBlock title="Цеппелино" description="Тестовая пицца" price={500} />
      <ProductBlock title="Цеппелино" description="Тестовая пицца" price={500} />
      <ProductBlock title="Цеппелино" description="Тестовая пицца" price={500} />
      <ProductBlock title="Цеппелино" description="Тестовая пицца" price={500} />
      <ProductBlock title="Цеппелино" description="Тестовая пицца" price={500} />
    </>
  );
}

export default MainPage;
