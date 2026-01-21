import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-indigo-50 to-white">

        {/* Left */}
        <div>
          <span className="text-indigo-600 font-semibold tracking-wide">
            SkillSync Platform
          </span>

          <h1 className="text-6xl font-bold leading-tight mt-4">
            Connect skills. <br /> Create impact.
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            SkillSync helps students find freelance gigs and volunteer opportunities within campus.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow">
              Get Started
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-40 bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={`https://source.unsplash.com/300x300/?technology,students,work&sig=${i}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
