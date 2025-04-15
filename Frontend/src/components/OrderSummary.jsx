import { useState } from 'react';
import '../styles/OrderSummary.css';

function OrderSummary({ cart }) {
  const [quantities, setQuantities] = useState(cart.map(() => 1)); // Default quantity of 1 for each item

  const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta); // Prevent quantity from going below 1
    setQuantities(newQuantities);
  };

  const total = cart.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  );

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} />
              <div className="order-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span>{quantities[index]}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
              </div>
              <p className="subtotal">
                ${(item.price * quantities[index]).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="order-total">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default OrderSummary;