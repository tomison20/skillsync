import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LearnMore from "./pages/LearnMore";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learn" element={<LearnMore />} />
      </Routes>

      {/* Footer only once globally */}
      <Footer />
    </>
  );
}

export default App;
