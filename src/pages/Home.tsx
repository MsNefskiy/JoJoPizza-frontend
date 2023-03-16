import { useEffect, useState } from "react";
import axios from "axios";

import Categories from "../components/Categories";
import ProductBlock from "../components/ProductBlock";
import Sort from "../components/Sort";
import "../scss/app.scss";

interface IProduct {
  title: string;
  image: string;
  price: number;
  rating: number;
  specifications: {
    types: number[];
    sizes: number[];
    category: number;
  };
  _id: string;
}

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getMenu() {
    await axios
      .get<IProduct[]>("http://localhost:3000/api/product")
      .then((response) => {
        setProducts(response.data);
      });
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <div className="content__title">Все пиццы</div>
          <div className="content__items">
            {products.map((product) => (
              <ProductBlock
                key={product["_id"]}
                title={product.title}
                image={product.image}
                types={product.specifications.types}
                sizes={product.specifications.sizes}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
