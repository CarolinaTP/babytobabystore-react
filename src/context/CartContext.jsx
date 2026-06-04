import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const addToCart = (product, quantity, color) => {
    setCart(prev => [
      ...prev,
      { ...product, quantity, color }
    ]);
    showNotification("¡Listo, producto agregado al carrito!");
  };

  const removeFromCart = (id, index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        notification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};