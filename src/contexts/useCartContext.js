import { createContext, useContext, useState } from "react"

// Create a context for the cart
const CartContext = createContext([])
// Shorthand for useContext of Cart context
export const useCart = () => useContext(CartContext)

// Shorthand component for cart context provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => setCart(prevState => [...prevState, product])

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
