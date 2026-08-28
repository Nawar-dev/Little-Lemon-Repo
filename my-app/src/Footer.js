export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        
        {/* First Column: Logo */}
        <div className="footer-logo">
          <img src="Logo.svg" alt="Little Lemon Logo" />
        </div>

        {/* Second Column : Navigation */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Reservations">Reservations</a></li>
            <li><a href="#OrderOnline">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
          </ul>
        </div>

        {/* Third Column : Contact */}
        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        {/* Fouth Column : Social Media */}
        <div className="footer-links">
          <h3>Social Media</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}