import '../styles/CartSummary.css';

function CartSummary({ cart, onProceedToCheckout }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax (mocked)
  const shipping = 10.00; // Flat shipping fee (mocked)
  const total = subtotal + tax + shipping;

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <div className="summary-details">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <p>Shipping: ${shipping.toFixed(2)}</p>
        <p className="total">Total: ${total.toFixed(2)}</p>
      </div>
      <button onClick={onProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default CartSummary;