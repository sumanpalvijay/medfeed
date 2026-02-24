export default function AboutPage() {
    return (
        <main className="w-full">

            {/* ===== HERO / INTRO ===== */}
            <section className="bg-white px-6 md:px-16 py-20">
                <div className="max-w-5xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        About{" "}
                        <span className="text-green-500">SIM</span>
                        <span className="text-blue-900">CRAFT</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                        SIMCRAFT is developed with a focus on providing effective,
                        well-tolerated, and patient-friendly care in the management of
                        acid reflux, heartburn, and GERD.
                    </p>
                </div>
            </section>

            {/* ===== PHILOSOPHY ===== */}
            <section className="bg-gray-50 px-6 md:px-16 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-3xl font-bold text-blue-900">
                            Our Philosophy
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            At SIMCRAFT, we believe reflux management should go beyond
                            symptom suppression. Our approach is centered on crafted care —
                            combining scientific formulation, patient comfort, and clinical
                            reliability.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Every aspect of SIMCRAFT is designed to support doctors in
                            achieving better patient outcomes with improved compliance and
                            tolerability.
                        </p>
                    </div>

                    {/* Visual placeholder */}
                    <div className="flex justify-center items-center">
                        <div className="w-64 h-64 bg-green-200 rounded-full opacity-80" />
                    </div>

                </div>
            </section>

            {/* ===== SCIENTIFIC FOCUS ===== */}
            <section className="px-6 md:px-16 py-16">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-center">
                        Scientific Focus
                    </h2>

                    <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
                        SIMCRAFT is formulated using evidence-based components that work
                        synergistically to provide a protective barrier against reflux and
                        promote patient comfort.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Alginate-based raft mechanism",
                            "Rapid onset of action",
                            "Well tolerated formulation",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-white p-6 rounded-xl shadow text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full" />
                                <p className="font-semibold text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ===== COMMITMENT ===== */}
            <section className="bg-blue-900 text-white px-6 md:px-16 py-16">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl font-bold">
                        Commitment to Doctors & Patients
                    </h2>

                    <p className="mt-4 text-blue-100 leading-relaxed">
                        We are committed to supporting healthcare professionals with
                        reliable therapies and meaningful clinical insights. Doctor
                        feedback plays a vital role in refining SIMCRAFT and ensuring
                        optimal patient experience.
                    </p>

                    <a
                        href="/feedback"
                        className="inline-block mt-6 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
                    >
                        Share Doctor Feedback
                    </a>

                </div>
            </section>

        </main>
    );
}