'use client';

import { useState } from 'react';

export default function FeedbackPage() {
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [hq, setHq] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [rating, setRating] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const data = {
            name,
            state,
            hq,
            doctorName,
            speciality,
            rating,
        };

        await fetch("/api/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        alert("Feedback submitted successfully");
    }
    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-green-500">SIMC</span>
                    <span className="text-blue-900">RAFT</span>
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
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border p-3 rounded-md"
                    />

                    {/* State */}
                    <input
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full border p-3 rounded-md"
                    />

                    {/* HQ */}
                    <input
                        type="text"
                        placeholder="HQ (Headquarters)"
                        value={hq}
                        onChange={(e) => setHq(e.target.value)}
                        className="w-full border p-3 rounded-md"
                    />

                    {/* Doctor Name */}
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        className="w-full border p-3 rounded-md"
                    />

                    {/* Speciality */}
                    <input
                        type="text"
                        placeholder="Speciality"
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
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
                                        value={option}
                                        checked={rating === option}
                                        onChange={(e) => setRating(e.target.value)}
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