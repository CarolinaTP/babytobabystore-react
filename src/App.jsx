import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";
import { useCart } from "./context/CartContext";
import "./App.css";

function App() {
  const { notification } = useCart();

  return (
    <>
      <Navbar />
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      <AppRouter />
    </>
  );
}

export default App;