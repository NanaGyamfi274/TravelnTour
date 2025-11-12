import React from "react";
import "./ForgotPassword.css";
import signinImage from "../../assets/signin-image.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      {/* Left side image */}
      <div className="forgot-left">
        <img src={signinImage} alt="City view" className="forgot-left-img" />
        <h2 className="forgot-logo">TRAVEL PULSE</h2>
      </div>

      {/* Right side form */}
      <div className="forgot-right">
        <div className="forgot-card">
          <h1 className="forgot-title">
            Forgot Password? <span>🤔</span>
          </h1>
          <p className="forgot-sub">
            No worries, we will send you reset instructions
          </p>

<div className="forgot-input-email">
          {/* <label className="forgot-label">Email Address</label> */}
          <input
            type="email"
            placeholder="Enter your email"
            className="forgot-input"
          />
</div>
          <button className="forgot-btn primary">Log In</button>

          <Link to="/" className="forgot-btn secondary">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
