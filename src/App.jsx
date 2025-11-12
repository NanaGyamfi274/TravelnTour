import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import SignIn from "./components/AuthForm/SignIn";
import ForgotPassword from "./components/AuthForm/ForgotPassword";
import LandingPage from "./components/AuthForm/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} /> {/* Sign Up */}
      <Route path="/signin" element={<SignIn />} /> {/* Sign In */}
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Forgot Password */}
      <Route path="/landing" element={<LandingPage/>} /> {/* LandingPage*/}
    </Routes>
  );
}

export default App;
