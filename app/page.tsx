import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full text-gray-800">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center px-6 md:px-16 py-4 bg-white shadow">
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-green-500">SIM</span>
          <span className="text-blue-900">CRAFT</span>
        </h1>

        <ul className="ml-auto hidden md:flex gap-8 text-gray-600">
          <li className="hover:text-blue-700 cursor-pointer">About</li>
          <li className="hover:text-blue-700 cursor-pointer">Science</li>
          <li className="hover:text-blue-700 cursor-pointer"><Link href="/feedback">Feedback</Link></li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              In the treatment of Acid Reflux, Heartburn & GERD
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              <span className="text-green-500">SIM</span>
              <span className="text-blue-900">CRAFT</span>
            </h2>

            <p className="mt-4 text-xl italic text-blue-800">
              Your Crafted Care in Reflux
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/feedback"
                className="w-48 text-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900">
                Doctor Feedback
              </a>


              <button className="border border-green-500 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                Scientific Info
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="absolute w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-60" />

            <Image
              src="/simcraft-bottle.png"
              alt="SIMCRAFT Oral Suspension"
              width={280}
              height={420}
              className="relative z-10 object-contain drop-shadow-2xl"
              priority
            />
          </div>

        </div> {/* ✅ THIS WAS MISSING */}

        {/* WAVES */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-green-200 to-transparent" />
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center">
          Challenges in Reflux Management
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p>Persistent Acid Reflux</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p>Night-time Heartburn</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p>Poor Taste Acceptance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p>Low Patient Compliance</p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold">
            How <span className="text-green-500">SIM</span>
            <span className="text-blue-900">CRAFT</span> Works
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Forms a protective alginate raft</li>
            <li>✔ Prevents acid reflux into esophagus</li>
            <li>✔ Provides rapid & long-lasting relief</li>
            <li>✔ Improves patient comfort & compliance</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-44 bg-gradient-to-r " />
          <Image
            src="/ILS-Logo.png"
            alt="SIMCRAFT Oral Suspension"
            width={280}
            height={420}
            className="relative z-10 object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="bg-blue-900 text-white py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center">
          Why Doctors Trust SIMCRAFT
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Evidence-Based Formulation",
            "Dual Action Protection",
            "Well Tolerated",
            "Long-Term Use Friendly",
          ].map((item) => (
            <div
              key={item}
              className="bg-white text-gray-800 p-6 rounded-xl text-center"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h3 className="text-3xl font-bold">
          Help Us Improve Crafted Care
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Your clinical feedback on taste and patient acceptance helps us
          enhance reflux care.
        </p>

        <div className="mt-8">
          <a
            href="/feedback"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900"
          >
            Doctor Feedback
          </a>
        </div>
      </section>

    </main>
  );
}