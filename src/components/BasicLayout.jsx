import Navbar from './Navbar'
import { CartProvider } from '../contexts/useCartContext'

export default function ProductList({ children }) { 
  return (
    <CartProvider>
      <Navbar />

      {children} 
    </CartProvider>
  );
}
