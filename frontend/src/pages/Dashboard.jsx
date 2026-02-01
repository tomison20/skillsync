import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen px-10 py-10">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Post Gig */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Post a New Gig</h2>

            <div className="flex gap-4">
              <input
                className="flex-1 border rounded-xl px-4 py-2"
                placeholder="Enter gig title..."
              />
              <button className="bg-indigo-600 text-white px-6 rounded-xl hover:bg-indigo-700">
                Add
              </button>
            </div>
          </div>

          {/* Volunteer */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Volunteer Events</h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Tech Fest Help Desk</li>
              <li>• Arts Day Management</li>
              <li>• NSS Blood Camp</li>
            </ul>
          </div>

          {/* Your gigs */}
          <div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Your Gigs</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-xl">Poster Design</div>
              <div className="border p-4 rounded-xl">Website Landing Page</div>
              <div className="border p-4 rounded-xl">Content Writing</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
