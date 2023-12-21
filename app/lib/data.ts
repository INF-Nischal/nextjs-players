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

export async function fetchPlayerById(id: string) {
  try {
    const result = await sql<player>`
      SELECT
        player.id,
        player.imageurl,
        player.pname,
        player.age,
        player.gender,
        player.position,
        player.description
      FROM player
      WHERE player.id = ${id};  
    `;
    const player = result.rows.map((row) => ({
      ...row,
    }));
    return player[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}