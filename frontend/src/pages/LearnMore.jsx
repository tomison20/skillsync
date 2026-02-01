import Navbar from "../components/Navbar";

export default function LearnMore() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen px-10 py-16">
        <h1 className="text-4xl font-bold mb-6">About SkillSync</h1>

        <p className="max-w-2xl text-gray-600 text-lg mb-10">
          SkillSync connects students with gigs, volunteering, portfolios, and growth opportunities inside campus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">Freelance Marketplace</div>
          <div className="bg-white p-6 rounded-xl shadow">Volunteer Management</div>
          <div className="bg-white p-6 rounded-xl shadow">Verified Portfolios</div>
        </div>
      </div>
    </>
  );
}
