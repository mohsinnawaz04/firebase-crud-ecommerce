import { useForm } from "react-hook-form";
import { useProducts } from "../lib/context/ProductsContext";

const AddProducts = () => {
  const products = useProducts();

  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    console.log(data);
    products.addData(data);
  };

  return (
    <div>
      <h1>Add Products</h1>
      <p>
        <b>Filhal aapko product add krne k baad refresh krna parega</b>
      </p>

      <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            type="text"
            placeholder="product name"
            {...register("productName", { required: true })}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="product description"
            {...register("productDescription", { required: true })}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="product id"
            {...register("productId", { required: true })}
          />
          <br />
          <br />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
