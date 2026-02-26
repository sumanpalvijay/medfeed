export default function AboutPage() {
    return (
        <main className="w-full text-gray-800">

            {/* ================= HERO ================= */}
            <section className="bg-blue-900 text-white py-20 px-6 md:px-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        About{" "}
                        <span className="text-green-400">SIMC</span>
                        <span className="text-white">RAFT</span>
                    </h1>

                    <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
                        SIMCRAFT is designed to provide effective, well-tolerated relief
                        from acid reflux, heartburn, and GERD through an advanced
                        alginate-based raft mechanism.
                    </p>
                </div>
            </section>

            {/* ================= ABOUT PRODUCT ================= */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            What is SIMCRAFT?
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            SIMCRAFT is an oral suspension formulated to manage acid reflux,
                            heartburn, and gastroesophageal reflux disease (GERD).
                            It works locally in the stomach and does not require systemic
                            absorption to be effective.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Its unique formulation creates a floating barrier that prevents
                            reflux of gastric contents while simultaneously reducing stomach
                            acidity, helping to relieve symptoms safely and effectively.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-4">
                            Key Highlights
                        </h3>

                        <ul className="space-y-3 text-gray-700">
                            <li>• Alginate-based raft mechanism</li>
                            <li>• Local action in the stomach</li>
                            <li>• Dual action: barrier + acid neutralization</li>
                            <li>• Well tolerated and suitable for long-term use</li>
                            <li>• Improves patient comfort and compliance</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* ================= WHY IT MATTERS ================= */}
            <section className="bg-gray-50 py-16 px-6 md:px-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Why SIMCRAFT Matters
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Reflux-related disorders can significantly impact a patient’s
                        quality of life. SIMCRAFT offers a non-systemic, well-accepted
                        option that supports effective symptom control while enhancing
                        treatment adherence.
                    </p>
                </div>
            </section>

            {/* ================= CLOSING ================= */}
            {/* ================= TEAM ================= */}
            <section className="py-16 px-6 md:px-16 bg-blue-900 text-white">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold mb-4">
                        Leadership & Core Team
                    </h2>



                    {/* TEAM GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                        {/* CARD */}
                        <div className="bg-white/10 rounded-xl py-6">
                            <p className="font-semibold text-lg">Vikash Anand</p>
                            <p className="text-blue-200 text-sm mt-1">Vice President (VP)</p>
                        </div>

                        <div className="bg-white/10 rounded-xl py-6">
                            <p className="font-semibold text-lg">Vineet Joshi</p>
                            <p className="text-blue-200 text-sm mt-1">Assistant Vice President (AVP)</p>
                        </div>

                        <div className="bg-white/10 rounded-xl py-6">
                            <p className="font-semibold text-lg">Nishant Hande</p>
                            <p className="text-blue-200 text-sm mt-1">Group Product Manager (GPM)</p>
                        </div>

                        <div className="bg-white/10 rounded-xl py-6">
                            <p className="font-semibold text-lg">Nitin Pal</p>
                            <p className="text-blue-200 text-sm mt-1">Product Executive (PE)</p>
                        </div>

                        <div className="bg-white/10 rounded-xl py-6">
                            <p className="font-semibold text-lg">Prashant Bhatt</p>
                            <p className="text-blue-200 text-sm mt-1">Assistant Product Manager (APM)</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ================= OTHER PRODUCTS ================= */}
            <section className="py-16 px-6 md:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold mb-4">
                        Our Product Portfolio
                    </h2>

                    <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                        Our product range is developed with a focus on quality, safety,
                        and clinical relevance across multiple therapeutic areas.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Simcon</p>
                        </div>

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Simcraft</p>
                        </div>

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Zecal Fem</p>
                        </div>

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Zecal Max</p>
                        </div>

                        <div className="bg-light-blue-100 rounded-xl shadow py-5">
                            <p className="font-semibold">Etoriflam 90 / MR</p>
                        </div>

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Oasoft Gold</p>
                        </div>

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Udchamp 300 / 450</p>
                        </div>

                        <div className="bg-white rounded-xl shadow py-5">
                            <p className="font-semibold">Rucam 400 / 550</p>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}