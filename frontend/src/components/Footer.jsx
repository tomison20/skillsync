import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter an email");
      return;
    }

    emailjs.send(
  "service_p5cdsfe",
  "template_10geyyr",
  {
    email: userEmail,
    name: "SkillSync User"
  },
  "8XXHlfZIfBsg8Y0Q3"
)
    .then(() => {
      setStatus("Email sent successfully!");
      setEmail("");
    })
    .catch((err) => {
      console.error(err);
      setStatus("Failed to send email.");
    });
  };

  return (
    <footer className="bg-[#0b132b] text-gray-300 px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold">SkillSync</h2>
          <p className="mt-4 text-sm text-gray-400">
            Connecting students with real opportunities inside campus.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Freelance Gigs</li>
            <li>Volunteer Events</li>
            <li>Portfolio</li>
            <li>Certificates</li>
          </ul>
        </div>

        {/* Email Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>

          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1c2541] px-4 py-2 rounded-l-lg outline-none text-white w-full"
            />
            <button
              type="submit"
              className="bg-indigo-600 px-5 py-2 rounded-r-lg hover:bg-indigo-700 text-white"
            >
              Join
            </button>
          </form>

          {status && <p className="text-sm mt-2 text-gray-400">{status}</p>}
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10 text-sm">
        © 2026 SkillSync. All rights reserved.
      </p>
    </footer>
  );
}
