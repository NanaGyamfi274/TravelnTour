import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import SignIn from "./components/AuthForm/SignIn";
import ForgotPassword from "./components/AuthForm/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} /> {/* Sign Up */}
      <Route path="/signin" element={<SignIn />} /> {/* Sign In */}
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Forgot Password */}
    </Routes>
  );
}

export default App;
