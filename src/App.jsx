import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import SignIn from "./components/AuthForm/SignIn"; // ✅ correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
