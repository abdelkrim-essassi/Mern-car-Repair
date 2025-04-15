import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';
import OrderConfirmation from '../components/OrderConfirmation';
import '../styles/Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [] } = location.state || {}; // Get cart from PartsStore page
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleOrderSubmit = (orderDetails) => {
    // Mock order submission logic
    console.log('Order submitted:', { cart, orderDetails });
    setIsOrderPlaced(true);
  };

  const handleBackToShopping = () => {
    navigate('/parts');
  };

  if (isOrderPlaced) {
    return (
      <div className="checkout">
        <Header />
        <OrderConfirmation onBackToShopping={handleBackToShopping} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="checkout">
      <Header />
      <main>
        <h2>Checkout</h2>
        <div className="checkout-content">
          <OrderSummary cart={cart} />
          <CheckoutForm onSubmit={handleOrderSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;