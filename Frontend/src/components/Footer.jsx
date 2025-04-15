import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`); // Add real subscription logic later
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="email-signup">
        <h3>Get the Latest</h3>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>AutoFix Mission</h4>
          <p>Empowering drivers and mechanics since 2025.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: help@autofix.com</p>
          <p>Phone: +1-888-999-0000</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaTwitter size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>
      <p className="copyright">© 2025 AutoFix. All rights reserved.</p>
    </footer>
  );
}

export default Footer;