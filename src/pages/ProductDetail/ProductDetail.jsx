import "./ProductDetail.css";

import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    p => p.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState("");

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="detail-container">
        <p>Producto no encontrado</p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.colors && !color) {
      alert("Por favor selecciona un color");
      return;
    }
    addToCart(product, quantity, color);
    setQuantity(1);
    setColor("");
  };

  return (
    <div className="detail-container">

      <img src={product.image} alt={product.name} />

      <div>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        {product.colors && (
          <select
            value={color}
            onChange={(e) =>
              setColor(e.target.value)
            }
          >
            <option value="">
              Elegir color
            </option>

            {product.colors.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) =>
            setQuantity(Number(e.target.value))
          }
        />

        <button
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>

      </div>
    </div>
  );
};

export default ProductDetail;