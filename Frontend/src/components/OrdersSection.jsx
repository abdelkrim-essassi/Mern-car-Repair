import '../styles/OrdersSection.css';

const orders = [
  {
    id: 1,
    orderNumber: '12345',
    date: '2025-04-10',
    total: 59.98,
    status: 'Delivered',
    items: [
      { id: 1, name: 'Brake Pads', price: 29.99, quantity: 1 },
      { id: 2, name: 'Oil Filter', price: 12.99, quantity: 2 },
    ],
  },
  {
    id: 2,
    orderNumber: '12346',
    date: '2025-04-05',
    total: 89.99,
    status: 'Shipped',
    items: [{ id: 3, name: 'Car Battery', price: 89.99, quantity: 1 }],
  },
];

function OrdersSection() {
  return (
    <div className="orders-section">
      <h3>Order History</h3>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order">
            <div className="order-header">
              <p><strong>Order #:</strong> {order.orderNumber}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
            <div className="order-items">
              {order.items.map((item) => (
                <div key={item.id} className="order-item">
                  <p>{item.name}</p>
                  <p>${item.price} x {item.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default OrdersSection;