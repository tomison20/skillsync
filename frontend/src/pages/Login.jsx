import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
