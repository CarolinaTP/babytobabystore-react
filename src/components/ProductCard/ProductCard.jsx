import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        Ver producto
      </Link>

    </div>
  );
};

export default ProductCard;