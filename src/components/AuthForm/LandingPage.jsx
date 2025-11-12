import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import icons from "../../assets/icons.png"; // 👈 your single image

const LandingPage = () => {
  return (
    <div className="landing">
      {/* HEADER / NAVBAR */}
      <header className="landing-header">
        <div className="logo">TRAVEL PULSE</div>
        <nav className="nav-links">
          <a href="#">Destinations</a>
          <a href="#">Stories</a>
          <a href="#">Reviews</a>
        </nav>
        <div className="nav-btns">
          <Link to="/signin" className="btn-outline">
            Login
          </Link>
          <Link to="/" className="btn-primary">
            Sign Up
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Explore, Plan & Book Your Next Adventure ✈️</h1>
          <p>
            Discover top travel destinations, explore exciting stories, and let
            your wanderlust take flight with Travel Pulse.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="Travel world"
          />
        </div>
      </section>

      {/* FEATURED ICONS */}
      <section className="featured">
        <p>As featured in</p>
        <div className="featured-icons">
          <img src={icons} alt="Featured Icons" />
        </div>
      </section>

      {/* TOP LOCATIONS */}
      <section className="section">
        <h2>Top Locations 🌴</h2>
        <div className="card-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
              alt="Accra"
            />
            <h3>Accra</h3>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1553514029-1318c9127859"
              alt="Lagos"
            />
            <h3>Lagos</h3>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592"
              alt="Paris"
            />
            <h3>Paris</h3>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              alt="Tokyo"
            />
            <h3>Tokyo</h3>
          </div>
        </div>
      </section>

      {/* RECENT SEARCHES */}
      <section className="section light">
        <h2>Recent Searches 🔍</h2>
        <div className="card-grid">
          <div className="card small">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Bali"
            />
            <h3>Bali</h3>
          </div>
          <div className="card small">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
              alt="Cape Town"
            />
            <h3>Cape Town</h3>
          </div>
          <div className="card small">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Dubai"
            />
            <h3>Dubai</h3>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="section">
        <h2>Top Travel Stories 📖</h2>
        <div className="stories">
          <div className="story">
            <img
              src="https://images.unsplash.com/photo-1499696010181-3ebd9d3cb2c2"
              alt="Story 1"
            />
            <div>
              <h3>Journey Through the Sahara Desert</h3>
              <p>
                Discover the vast beauty and adventure of Africa’s largest
                desert.
              </p>
            </div>
          </div>
          <div className="story">
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
              alt="Story 2"
            />
            <div>
              <h3>Exploring the Streets of Paris</h3>
              <p>A guide to the most romantic spots in the City of Lights.</p>
            </div>
          </div>
          <div className="story">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
              alt="Story 3"
            />
            <div>
              <h3>The Magic of Tokyo Nights</h3>
              <p>
                Experience the neon lights, culture, and cuisine of Japan’s
                capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Travel Pulse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
