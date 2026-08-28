import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="btn">Reserve a Table</button>
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500" 
            alt="Restaurant food presentation" 
          />
        </div>
      </div>
    </section>
  );
}