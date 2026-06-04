import "./Checkout.css";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

const Checkout = () => {

  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="checkout-form">
        <h2>Tu carrito está vacío</h2>
        <button onClick={() => navigate("/")}>
          Volver a comprar
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      clearCart();
      navigate("/thankyou");
    }, 1000);
  };

  return (
    <form
      className="checkout-form"
      onSubmit={handleSubmit}
    >

      <h2>Información de envío</h2>

      <input
        type="text"
        placeholder="Nombre"
        required
      />

      <input
        type="email"
        placeholder="Email"
        required
      />

      <input
        type="text"
        placeholder="Dirección"
        required
      />

      <input
        type="tel"
        placeholder="Teléfono"
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>

    </form>
  );
};

export default Checkout;