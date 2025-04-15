import { FaWrench, FaMapMarkerAlt, FaLock, FaHeadset } from 'react-icons/fa';
import '../styles/ValueProposition.css';

function ValueProposition() {
  return (
    <section className="value-proposition">
      <h2>AutoFix Delivers</h2>
      <div className="value-grid">
        <div className="value-card">
          <FaWrench size={40} color="#F97316" />
          <h3>Parts for Every Ride</h3>
          <p>Search thousands of compatible options.</p>
        </div>
        <div className="value-card">
          <FaMapMarkerAlt size={40} color="#F97316" />
          <h3>Pro Mechanics Nearby</h3>
          <p>Connect with trusted experts instantly.</p>
        </div>
        <div className="value-card">
          <FaLock size={40} color="#F97316" />
          <h3>Hassle-Free Checkout</h3>
          <p>Fast, secure transactions every time.</p>
        </div>
        <div className="value-card">
          <FaHeadset size={40} color="#F97316" />
          <h3>Real-Time Support</h3>
          <p>Help when you need it, 24/7.</p>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;