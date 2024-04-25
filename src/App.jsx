import AddProducts from "./pages/AddProducts";
import GetProductsByQuery from "./pages/GetProductsByQuery";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>
      <div className="products">
        <Products />
      </div>

      <div className="add-products">
        <AddProducts />
      </div>

      <div className="get-products">
        <GetProductsByQuery />
      </div>
    </div>
  );
};

export default App;
