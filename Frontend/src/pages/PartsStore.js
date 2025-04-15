import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PartsGrid from '../components/PartsGrid';
import Filters from '../components/Filters';
import CartSidebar from '../components/CartSidebar';
import '../styles/PartsStore.css';

function PartsStore() {
  const [cart, setCart] = useState([]); // State for cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar visibility
  const [filters, setFilters] = useState({
    search: '',
    priceRange: [0, 1000],
    brand: '',
    compatibility: '',
  });

  const addToCart = (part) => {
    setCart([...cart, part]);
    setIsCartOpen(true); // Open the cart sidebar when an item is added
  };

  const removeFromCart = (partId) => {
    setCart(cart.filter((item) => item.id !== partId));
  };

  return (
    <div className="parts-store">
      <Header />
      <main>
        <section className="search-and-filters">
          <h2>Find the Perfect Part</h2>
          <Filters filters={filters} setFilters={setFilters} />
        </section>
        <PartsGrid filters={filters} addToCart={addToCart} />
        <CartSidebar
          cart={cart}
          isOpen={isCartOpen}
          closeCart={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      </main>
      <Footer />
    </div>
  );
}

export default PartsStore;