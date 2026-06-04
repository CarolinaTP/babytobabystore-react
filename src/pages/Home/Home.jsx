import "./Home.css";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <div className="products-grid">

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
};

export default Home;