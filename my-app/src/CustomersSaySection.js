export default function CustomersSay() {
  const testimonials = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      name: "Sara M.",
      text: "The Mediterranean flavors are incredible! Best Greek salad in town.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐⭐",
      name: "John D.",
      text: "Awesome atmosphere and top-notch service. The Bruschetta is a must-try.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      name: "Elena R.",
      text: "Authentic recipes that taste just like home. Will definitely visit again!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
      id: 4,
      rating: "⭐⭐⭐⭐⭐",
      name: "Alex P.",
      text: "Great place for family dinners. Reserved online effortlessly.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article key={item.id} className="testimonial-card">
            <div className="rating">{item.rating}</div>
            <div className="user-info">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
            <p>"{item.text}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}