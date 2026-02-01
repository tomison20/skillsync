import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow w-96"
        >
          <h2 className="text-2xl font-bold mb-6">Register</h2>

          <input
            name="name"
            placeholder="Name"
            className="w-full border p-2 mb-3"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full border p-2 mb-3"
            onChange={handleChange}
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            className="w-full border p-2 mb-3"
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full border p-2 mb-4"
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="organizer">Organizer</option>
          </select>

          <button className="bg-indigo-600 text-white w-full py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
