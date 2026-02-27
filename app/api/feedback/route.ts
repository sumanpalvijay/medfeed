import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
  try {
    console.log("DATABASE_URL loaded:", !!process.env.DATABASE_URL);
    const { name, state, hq, doctorName, speciality, rating } =
      await req.json();

    await pool.query(
      `INSERT INTO feedback 
       (name, state, hq, doctor_name, speciality, rating)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, state, hq, doctorName, speciality, rating]
    );

    return NextResponse.json({
      success: true,
      message: "Feedback saved in Neon DB",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 }
    );
  }
}