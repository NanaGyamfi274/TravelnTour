import { useState } from "react";
import "./AuthForm.css";
import twitterLogo from "../../assets/twitter-login-project.png"; // use your image here

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <img src={twitterLogo} alt="Twitter Logo" className="twitter-logo" />

      <h2>{isLogin ? "Log in to Twitter" : "Sign up for Twitter"}</h2>

      <form className="auth-form">
        {!isLogin && (
          <input
            type="text"
            placeholder="Full name"
            className="input-box"
          />
        )}

        <input
          type="text"
          placeholder="Phone, email, or username"
          className="input-box"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box"
        />

        <button type="submit" className="login-btn">
          {isLogin ? "Log in" : "Sign up"}
        </button>
      </form>

      {isLogin ? (
        <p className="extra-text">
          Forgotten password?{" "}
          <span className="link" onClick={() => setIsLogin(false)}>
            Sign up for Twitter
          </span>
        </p>
      ) : (
        <p className="extra-text">
          Already have an account?{" "}
          <span className="link" onClick={() => setIsLogin(true)}>
            Log in
          </span>
        </p>
      )}
    </div>
  );
}
