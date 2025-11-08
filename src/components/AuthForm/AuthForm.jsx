import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";
import bgImage from "../../assets/signup-image.png";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="auth-container">
      {/* Left image */}
      <div
        className="auth-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right form */}
      <div className="auth-form-section">
        <div className="form-box">
          <h1 className="form-title">
            Hi, Get Started Now <span className="wave">👋</span>
          </h1>
          <p className="form-subtitle">
            Enter details to create your Travel Pulse account
          </p>

          <button className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google icon"
            />
            Continue with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="input-group password-group">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />
              <span
                className="toggle"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="signin-text">
            Already have an account?{" "}
            <Link to="/signin" className="signin-link">
              Sign in to account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
