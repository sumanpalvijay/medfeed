import Image from "next/image";
import Link from "next/link"
import Navbar from "./components/Navbar";

export default function HomePage() {

  return (
    <>
      <Navbar />
      {/* ================= HERO ================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              In the treatment of Acid Reflux, Heartburn & GERD
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              <span className="text-green-500">SIMC</span>
              <span className="text-blue-900">RAFT</span>
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


              <Link
                href="/science"
                className="inline-block border border-green-500 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50"
              >
                Scientific Info
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="absolute w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-60" />

            <Image
              src="/bottle.png"
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

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Image
              src="/icons/reflux.png"
              alt="Persistent Acid Reflux"
              width={70}
              height={70}
              className="mx-auto mb-4"
            />
            <p className="font-medium">Persistent Acid Reflux</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Image
              src="/icons/night.png"
              alt="Night-time Heartburn"
              width={70}
              height={70}
              className="mx-auto mb-4"
            />
            <p className="font-medium">Night-time Heartburn</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Image
              src="/icons/taste.png"
              alt="Poor Taste Acceptance"
              width={70}
              height={70}
              className="mx-auto mb-4"
            />
            <p className="font-medium">Poor Taste Acceptance</p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Image
              src="/icons/compliance.png"
              alt="Low Patient Compliance"
              width={70}
              height={70}
              className="mx-auto mb-4"
            />
            <p className="font-medium">Low Patient Compliance</p>
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
            <li>✔ Sodium alginate reacts with stomach acid to form a thick gel</li>
            <li>✔ Sodium bicarbonate produces carbon dioxide, which gets trapped in the gel and makes it float like a raft</li>
            <li>✔ Calcium carbonate and sodium bicarbonate* neutralize excess stomach acid</li>
            <li>✔ Result: Protective barrier + reduced acidity for symptom relief</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-44 bg-gradient-to-r " />
          <Image
            src="/ILS.png"
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
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Doctors Trust SIMCRAFT
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">


          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">
            <p className="font-semibold">Evidence-Based Formulation</p>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">
            <p className="font-semibold">Dual Action Protection</p>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">
            <p className="font-semibold">Well Tolerated</p>
          </div>


          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">

            <p className="font-semibold">Long-Term Use Friendly</p>
          </div>

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
          <Link
            href="/feedback"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900"
          >
            Doctor Feedback
          </Link>
        </div>
      </section>
    </>
  );
}