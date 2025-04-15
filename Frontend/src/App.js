import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Homepage from './pages/Homepage';
import PartsStore from './pages/PartsStore';
import MechanicFinder from './pages/MechanicFinder';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import MechanicPortal from './pages/MechanicPortal';
import AdminHub from './pages/AdminHub';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/parts" element={<PartsStore />} />
          <Route path="/mechanics" element={<MechanicFinder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/mechanic-portal" element={<MechanicPortal />} />
          <Route path="/admin-hub" element={<AdminHub />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;