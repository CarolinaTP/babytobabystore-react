import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu pedido ha sido confirmado exitosamente.</p>
        <p>Recibirás un email de confirmación pronto.</p>
        <button onClick={() => navigate("/")}>
          Volver a la tienda
        </button>
      </div>
    </div>
  );
};

export default ThankYou;