import { useEffect } from "react";
import { useProducts } from "../lib/context/ProductsContext";

const Products = () => {
  const products = useProducts();
  const docs = products.current;

  return (
    <div>
      <h1>Welcome back! Admin</h1>
      <div>
        {docs?.map((doc, idx) => (
          <div key={idx} className="product-card">
            <h2>{doc.productName}</h2>
            <p>{doc.productDescription}</p>
            <p>{doc.productId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
