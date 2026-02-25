export default function FeedbackPage() {
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-green-500">SIM</span>
                    <span className="text-blue-900">CRAFT</span>
                </h1>

                <p className="text-center text-gray-600 mt-2 font-medium">
                    Peppermint Power Campaign – Doctor Feedback
                </p>

                {/* Objective */}
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Objective:</strong> To drive doctor engagement by encouraging
                    them to taste SIMCRAFT (Peppermint Flavour) and capture structured
                    feedback from every HQ.
                </div>

                {/* FORM */}
                <form className="mt-6 space-y-4">

                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border p-3 rounded-md"
                    />

                    {/* State */}
                    <input
                        type="text"
                        placeholder="State"
                        className="w-full border p-3 rounded-md"
                    />

                    {/* HQ */}
                    <input
                        type="text"
                        placeholder="HQ (Headquarters)"
                        className="w-full border p-3 rounded-md"
                    />

                    {/* Doctor Name */}
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        className="w-full border p-3 rounded-md"
                    />

                    {/* Speciality */}
                    <input
                        type="text"
                        placeholder="Speciality"
                        className="w-full border p-3 rounded-md"
                    />

                    {/* Taste Rating */}
                    <div className="mt-6">
                        <p className="font-semibold text-gray-700 mb-2">
                            Taste & Rate SIMCRAFT (Peppermint Flavour)
                        </p>

                        <div className="space-y-2">
                            {[
                                "Excellent",
                                "Good",
                                "Average",
                                "Bad",
                                "Didn’t Like It",
                            ].map((option) => (
                                <label
                                    key={option}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="taste_rating"
                                        className="accent-green-600"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900"
                    >
                        Submit Feedback
                    </button>

                </form>
            </div>
        </main>
    );
}