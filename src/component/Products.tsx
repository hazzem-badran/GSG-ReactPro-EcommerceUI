import Product from "./Product";
import { PRODUCTS } from "@/constents/products";
import { useView } from "@/context/ViewContext";


const Products = () => {
  const { view } = useView()


  return (


    <div className="w-full p-4 rounded-lg flex flex-col gap-4">
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex flex-col gap-4"
        }
      >
        {PRODUCTS.map((product, index) => (
          <Product key={index} variant={view} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
