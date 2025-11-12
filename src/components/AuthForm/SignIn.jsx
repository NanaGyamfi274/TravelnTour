import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./AuthForm.css";
import bgImage from "../../assets/signin-image.png"; // later change to your own signin image

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigation

  // ✅ Handle login and navigate
  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary "success" condition
    // (You can replace this with real authentication later)
    navigate("/landing");
  };

  return (
    <div className="auth-container">
      {/* Left side image */}
      <div
        className="auth-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right form section */}
      <div className="auth-form-section">
        <div className="form-box">
          <h1 className="form-title">
            Welcome Back <span className="wave">👋</span>
          </h1>
          <p className="form-subtitle">
            Continue with Google or enter login details
          </p>

          {/* Google button */}
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

          {/* ✅ added handleLogin here */}
          <form onSubmit={handleLogin}>
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

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forget Password?
              </Link>
            </div>

            <button type="submit" className="signup-btn">
              Log In
            </button>
          </form>

          <p className="signin-text">
            Don’t have an account?{" "}
            <Link to="/" className="signin-link">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
