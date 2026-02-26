"use client";

import { useEffect, useState } from "react";

type Feedback = {
    name: string;
    state: string;
    hq: string;
    speciality: string;
    rating: string;
    date: string;
};

export default function AdminPage() {
    const [data, setData] = useState<Feedback[]>([]);

    useEffect(() => {
        fetch("/api/feedback")
            .then(res => res.json())
            .then(setData);
    }, []);

    return (
        <main className="min-h-screen bg-gray-100 px-6 md:px-16 py-10">

            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="bg-white rounded-xl shadow overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">State</th>
                            <th className="px-6 py-3">HQ</th>
                            <th className="px-6 py-3">Speciality</th>
                            <th className="px-6 py-3">Rating</th>
                            <th className="px-6 py-3">Date</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {data.map((item, i) => (
                            <tr key={i}>
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.state}</td>
                                <td className="px-6 py-4">{item.hq}</td>
                                <td className="px-6 py-4">{item.speciality}</td>
                                <td className="px-6 py-4 font-semibold">
                                    {item.rating}
                                </td>
                                <td className="px-6 py-4">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </main>
    );
}