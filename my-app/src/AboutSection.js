export default function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-container">
        <div className="chicago-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to start their dream restaurant. 
          </p>
          <p>
            Crafted with love, our menu draws from Italian, Greek, and Turkish culture while adding modern techniques to elevate traditional Mediterranean dining.
          </p>
        </div>
        <div className="chicago-images">
          <img 
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400" 
            alt="Mario and Adrian" 
            className="img-stacked top-img"
          />
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400" 
            alt="Kitchen cooking" 
            className="img-stacked bottom-img"
          />
        </div>
      </div>
    </section>
  );
}