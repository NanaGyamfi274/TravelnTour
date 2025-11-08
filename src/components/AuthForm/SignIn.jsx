import { Link } from "react-router-dom";
import signinImage from "../../assets/signin-image.png";
import "./AuthForm.css";

const SignIn = () => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Left Image */}
      <div className="w-1/2 h-screen">
        <img
          src={signinImage}
          alt="Sign In"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Welcome Back</h1>

        <form className="w-full max-w-md space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
