import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">Fix Your Ride, Fast and Simple</h1>
        <p className="hero-subtext">Top-tier parts and expert mechanics at your fingertips.</p>
        <div className="hero-ctas">
          <Link to="/parts" className="btn primary">Browse Parts</Link>
          <Link to="/mechanics" className="btn secondary">Book a Mechanic</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;