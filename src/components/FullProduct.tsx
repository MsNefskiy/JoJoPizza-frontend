import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../core/models/product.model";
import productService from "../core/services/product.service";

function FullProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await productService.getProductById(id as string);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  });

  if (!product) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className="container">
      <h1>{product?.title}</h1>
      <img src={product?.image} alt="pizza" />
      <h4>{product?.price}</h4>
    </div>
  );
}

export default FullProduct;
