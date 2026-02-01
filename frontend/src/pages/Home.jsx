import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-indigo-50 to-white">

        {/* LEFT SIDE */}
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

          <div className="mt-8 flex gap-4 items-center">
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow"
            >
              Get Started
            </Link>

            <Link
              to="/learn"
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="gallery"
              className="h-40 w-full object-cover rounded-2xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>
    </>
  );
}
