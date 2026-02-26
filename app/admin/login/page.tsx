"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        if (password === "admin123") {
            document.cookie = "admin=true; path=/";
            router.push("/admin");
        } else {
            alert("Invalid password");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow max-w-sm w-full">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Admin Login
                </h1>

                <input
                    type="password"
                    placeholder="Enter admin password"
                    className="w-full border rounded-lg px-4 py-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900"
                >
                    Login
                </button>
            </div>
        </main>
    );
}