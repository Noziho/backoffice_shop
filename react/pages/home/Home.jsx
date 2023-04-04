import '../../../assets/App.css';
import { Header } from "../../components/Header/Header";
import { Cart } from "../../components/Cart/Cart";
import { Categories } from "../../components/Categories/Categories";
import { useEffect, useState } from "react";
import {ProductList} from "../../components/ProductList/ProductList";

export const Home = function () {
  const [products, setProducts] = useState([]);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    document.title = "Home";
  }, []);

  if (isProductUpdated) {
    setProducts(products);
    setIsProductUpdated(false);
  }

  return (
    <>
      <Header title="Welcome!" />
      <div className="container">
        <Cart products={products} setIsProductUpdated={setIsProductUpdated} />
        <div className="app-main">
          <Categories setCategory={setCategory} />
          <ProductList
            category={category}
            products={products}
            setIsProductUpdated={setIsProductUpdated}
          />
        </div>
      </div>
    </>
  );
};
