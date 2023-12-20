import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { player } from "./definitions";

export async function fetchPlayers() {
  noStore();

  try {
    const data = await sql<player>`SELECT * FROM player`;
    const players = data.rows;
    return players;
  } catch (error) {
    console.log("Error fetching players: ", error);
    throw new Error("Failed to fetch all customers.");
  }
}
