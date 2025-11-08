import { Link } from "react-router-dom";
import signupImage from "../../assets/signup-image.png";

const AuthForm = () => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 h-full">
        <img src={signupImage} alt="signup" className="w-full h-full object-cover" />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-semibold mb-6">Create Account</h1>
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
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
          <button className="w-full bg-blue-600 text-white p-3 rounded mt-4 hover:bg-blue-700">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
