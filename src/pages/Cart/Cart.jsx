import "./Cart.css";

import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const {
    cart,
    removeFromCart,
    total
  } = useCart();

  return (
    <div className="cart-container">

      <h1>Tu carrito</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map((item, index) => (

            <div
              className="cart-item"
              key={index}
            >

              <h3>{item.name}</h3>

              <p>
                Cantidad: {item.quantity}
              </p>

              <p>
                Color: {item.color || "N/A"}
              </p>

              <p>
                Precio: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() =>
                  removeFromCart(item.id, index)
                }
              >
                Eliminar
              </button>

            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <Link to="/checkout">
            Finalizar compra
          </Link>
        </>
      )}

    </div>
  );
};

export default Cart;