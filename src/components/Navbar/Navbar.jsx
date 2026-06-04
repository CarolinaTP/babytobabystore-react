import "./Navbar.css";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useCart } from "../../context/CartContext";
import logoImg from "../../assets/products/logo.png";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="store-brand">
        <img src={logoImg} alt="logo" className="logo" />
        <h2>Baby to baby - Store</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;