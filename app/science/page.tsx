import Image from "next/image";

export default function SciencePage() {
    return (
        <main className="w-full text-gray-800">

            {/* ================= HERO ================= */}
            <section className="bg-blue-900 text-white py-20 px-6 md:px-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Science Behind{" "}
                        <span className="text-green-400">SIMC</span>
                        <span className="text-white">RAFT</span>
                    </h1>

                    <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
                        SIMCRAFT is based on an alginate raft mechanism designed to
                        provide effective protection against acid reflux and GERD.
                    </p>
                </div>
            </section>

            {/* ================= RAFT MECHANISM ================= */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT – TEXT */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            How SIMCRAFT Works
                        </h2>

                        <p className="text-gray-700 mb-4">
                            SIMCRAFT works locally in the stomach and does not need to enter the
                            bloodstream.
                        </p>

                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            <li>
                                <strong>Sodium alginate</strong> reacts with stomach acid to form a
                                thick, gel-like layer.
                            </li>
                            <li>
                                <strong>Sodium bicarbonate</strong> reacts with the acid and produces
                                carbon dioxide gas.
                            </li>
                            <li>
                                The trapped gas allows the gel to float like a <strong>raft</strong>
                                on top of stomach contents.
                            </li>
                            <li>
                                This floating raft forms a <strong>protective barrier</strong> that
                                prevents acid reflux into the esophagus.
                            </li>
                            <li>
                                <strong>Calcium carbonate and sodium bicarbonate</strong> neutralize
                                excess stomach acid, reducing burning and irritation.
                            </li>
                        </ul>

                        <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                            <p className="font-semibold">
                                Dual Action:
                            </p>
                            <p>
                                Protective floating barrier + reduced stomach acidity
                            </p>
                        </div>
                    </div>

                    {/* RIGHT – RAFT IMAGE */}
                    <div className="flex justify-center">
                        <Image
                            src="/raft.png"
                            alt="Alginate raft mechanism preventing acid reflux"
                            width={500}
                            height={350}
                            className="rounded-xl shadow-lg object-contain"
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* ================= SCIENTIFIC ADVANTAGES ================= */}
            <section className="bg-gray-50 py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-center mb-10">
                        Scientific Advantages
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <p className="font-semibold">Raft-Based Protection</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Forms a physical barrier to prevent reflux.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <p className="font-semibold">Rapid Onset</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Starts working soon after ingestion.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <p className="font-semibold">Well Tolerated</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Minimal systemic absorption.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <p className="font-semibold">Long-Term Use Friendly</p>
                            <p className="text-sm text-gray-600 mt-2">
                                Suitable for chronic reflux management.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= CLINICAL POSITIONING ================= */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">
                        Clinical Positioning
                    </h2>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        SIMCRAFT may be considered in patients with mild to moderate
                        GERD, post-meal reflux, and heartburn, either as monotherapy
                        or in combination therapy, based on clinical judgment.
                    </p>
                </div>
            </section>

        </main>
    );
}