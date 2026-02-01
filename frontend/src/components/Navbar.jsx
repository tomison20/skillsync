import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
      
      {/* Logo + Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-9 w-9" />
        <span className="text-2xl font-bold text-indigo-600">SkillSync</span>
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6 text-gray-600">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <Link to="/login">Login</Link>
        <Link to="/register" className="bg-indigo-600 text-white px-5 py-2 rounded-xl">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
