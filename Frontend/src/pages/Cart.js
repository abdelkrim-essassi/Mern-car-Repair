import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import '../styles/Cart.css';

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCart = location.state?.cart || [];
  const [cart, setCart] = useState(initialCart.map(item => ({ ...item, quantity: 1 })));

  const handleQuantityChange = (id, delta) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div className="cart-page">
      <Header />
      <main>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>
            <CartSummary cart={cart} onProceedToCheckout={handleProceedToCheckout} />
          </div>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button onClick={() => navigate('/parts')}>Continue Shopping</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;