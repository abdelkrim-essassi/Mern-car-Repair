import { Link } from 'react-router-dom';
import '../styles/UserJourney.css';

function UserJourney() {
  return (
    <section className="user-journey">
      <div className="journey-half owners">
        <h3>Vehicle Owners</h3>
        <p>Shop, book, and track with ease.</p>
        <div className="journey-buttons">
          <Link to="/parts" className="btn">Parts</Link>
          <Link to="/mechanics" className="btn">Mechanics</Link>
        </div>
      </div>
      <div className="journey-half mechanics">
        <h3>Mechanics</h3>
        <p>Expand your reach effortlessly.</p>
        <Link to="/mechanic-portal" className="btn">Join Now</Link>
        
      </div>
    </section>
  );
}

export default UserJourney;