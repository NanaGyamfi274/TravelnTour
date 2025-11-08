import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import SignIn from "./components/AuthForm/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} /> {/* Sign Up */}
      <Route path="/signin" element={<SignIn />} /> {/* Sign In */}
    </Routes>
  );
}

export default App;
