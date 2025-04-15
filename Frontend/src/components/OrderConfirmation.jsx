import '../styles/OrderConfirmation.css';

function OrderConfirmation({ onBackToShopping }) {
  return (
    <div className="order-confirmation">
      <h2>Thank You for Your Order!</h2>
      <p>Your order has been successfully placed. You'll receive a confirmation email shortly.</p>
      <p>Order Number: #{Math.floor(Math.random() * 100000)}</p>
      <button onClick={onBackToShopping}>Back to Shopping</button>
    </div>
  );
}

export default OrderConfirmation;