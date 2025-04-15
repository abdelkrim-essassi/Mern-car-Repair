import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaCaretDown, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

function Header() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">
        <Link to="/">AutoFix</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/parts">Parts Store</Link>
        <Link to="/mechanics">Mechanic Finder</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="auth-section">
        {user ? (
          <div className="user-profile">
            <div
              className="user-info"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaUserCircle className="user-icon" />
              <span>{user.name}</span>
              <FaCaretDown className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/account" onClick={() => setIsDropdownOpen(false)}>
                  My Account
                </Link>
                {user.role === 'Mechanic' && (
                  <Link to="/mechanic-portal" onClick={() => setIsDropdownOpen(false)}>
                    Mechanic Portal
                  </Link>
                )}
                {user.role === 'Admin' && (
                  <Link to="/admin-hub" onClick={() => setIsDropdownOpen(false)}>
                    Admin Hub
                  </Link>
                )}
                <button onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Signup</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;