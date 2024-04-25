import { useProducts } from "../lib/context/ProductsContext";

const GetProductsByQuery = () => {
  const products = useProducts();

  return (
    <div>
      <h1>updateProductById</h1>
      <p>
        You have to manually give id in getProductsByQuery Component. <br /> It
        should be like this:{" "}
        <b>button onClick function products.getProductByID(1)</b>
      </p>
      <button
        onClick={() => {
          products.getProductByID("1");
        }}
      >
        Update Product
      </button>
    </div>
  );
};

export default GetProductsByQuery;
