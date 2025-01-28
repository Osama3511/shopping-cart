import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-text">
          <h1>Welcome to Our Fake Store!</h1>
          <p>Discover amazing products at unbeatable prices. Shop now!</p>
          <Link to="products" className="shop-now-link">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="home-info">
        <h2>Why Shop With Us?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Quality Products</h3>
            <p>We offer top-quality products from the best brands.</p>
          </div>
          <div className="info-card">
            <h3>Fast Shipping</h3>
            <p>Enjoy quick and reliable shipping to your doorstep.</p>
          </div>
          <div className="info-card">
            <h3>Great Deals</h3>
            <p>Find amazing discounts and deals on your favorite items.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
