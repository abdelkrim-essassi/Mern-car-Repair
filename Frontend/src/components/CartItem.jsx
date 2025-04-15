import { FaTrash } from 'react-icons/fa';
import '../styles/CartItem.css';

function CartItem({ item, onQuantityChange, onRemove }) {
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="price">${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
        </div>
        <p className="subtotal">Subtotal: ${subtotal}</p>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;