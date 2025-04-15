

import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import '../styles/CartSidebar.css';

function CartSidebar({ cart, isOpen, closeCart, removeFromCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleViewCart = () => {
    closeCart();
    navigate('/cart', { state: { cart } });
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Your Cart ({cart.length})</h3>
        <button onClick={closeCart}><FaTimes /></button>
      </div>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-footer">
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={handleViewCart} className="view-cart-btn">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;