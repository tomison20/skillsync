import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b bg-white">
      <h1 className="text-2xl font-bold text-indigo-600">SkillSync</h1>

      <div className="flex gap-8">
        <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
        <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
        <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
