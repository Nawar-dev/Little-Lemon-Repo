import { Link } from 'react-router-dom';

export default function Specials() {
  const specialsData = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy romaine lettuce, onions, olives, and our Chicago style feta cheese, garnished with crunchy garlic and oregano croutons.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400"
    },
    {
      id: 2,
      title: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Top with fresh tomatoes and basil.",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400"
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every single ingredient has been sourced and is as authentic as can be imagined.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400"
    }
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This Weeks Specials!</h2>
        <Link to="/menu">
          <button className="btn">Online Menu</button>
        </Link>
      </div>

      <div className="specials-grid">
        {specialsData.map((item) => (
          <article key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <Link to="/order" className="order-btn">
                Order a delivery 🚴‍♂️
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}