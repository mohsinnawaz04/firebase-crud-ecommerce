import { useForm } from "react-hook-form";
import { useChats } from "../lib/context/ChatContext";

const UpdateProducts = () => {
  const products = useChats();
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    console.log(data);
    products.addData(data);
  };
  return (
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
          {...register("productDesc", { required: true })}
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
  );
};

export default UpdateProducts;
