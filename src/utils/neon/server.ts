"use server";
import { neon } from "@neondatabase/serverless";

export async function getRecord() {
    const sql = neon(process.env.NEXT_PUBLIC_NEON_URL);
    const data = await sql`select * from options_transactions`;
    return data;
}