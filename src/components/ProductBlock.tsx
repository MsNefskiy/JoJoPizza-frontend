interface ProductBlockProps {
  title: string;
  price: number;
  description: string;
}

function ProductBlock(props: ProductBlockProps) {
  return (
    <>
      <img src="https://avatars.dzeninfra.ru/get-zen_doc/4790423/pub_60a674221a258e73228aadfa_60a674e2e3b9690bce2911d2/scale_1200" alt="ProductImg" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p>{props.price} рублей</p>
      <button type="button">В корзину</button>
    </>
  );
}

export default ProductBlock;
