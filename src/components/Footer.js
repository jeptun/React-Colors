import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Připoj se k barvám vice info na bla bla bla bla bla bla
        </p>

        <p className="footer-subscription-text">
          Tady se můžeš podivat na youtube atd
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up"> How it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up"> How it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up"> How it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up"> How it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
            <Link to="/"> Now it works</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
              <Link to="/" className="social-logo">
                  COOLORS &nbsp;<i className="fas fa-tint"></i>
              </Link>
          </div>
          <small className="website-right"> JD 2021 <i className="fas fa-dog"></i> </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
