"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow px-6 md:px-16 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold">
                    <span className="text-green-500">SIM</span>
                    <span className="text-blue-900">CRAFT</span>
                </h1>

                <ul className="hidden md:flex gap-8">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/science">Science</Link></li>
                    <li><Link href="/feedback">Feedback</Link></li>
                </ul>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {open && (
                <ul className="md:hidden mt-4 space-y-4">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/science">Science</Link></li>
                    <li><Link href="/feedback">Feedback</Link></li>
                </ul>
            )}
        </nav>
    );
}