import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="px-10 pt-10 pb-16 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
        <h1 className="text-4xl font-bold mb-6">About SkillSync</h1>

        <p className="max-w-3xl text-gray-600 text-lg mb-10">
          SkillSync is a platform designed to help students connect their skills with
          real opportunities inside their campus. Students can find freelance gigs,
          contribute to events as volunteers, build portfolios, and grow professionally.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">🎯 Freelance Gigs</h3>
            <p className="text-gray-600">
              Students can post and apply for tasks like design, coding, writing, etc.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">🤝 Volunteer Opportunities</h3>
            <p className="text-gray-600">
              Clubs and departments can recruit volunteers for college events easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">📁 Portfolio & Growth</h3>
            <p className="text-gray-600">
              Build verified portfolios, earn certificates, and showcase achievements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
