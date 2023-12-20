const { db } = require("@vercel/postgres");
const players = require("../app/lib/placeholder-data");

async function playerTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
            CREATE TABLE IF NOT EXISTS player (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                imageURL TEXT NOT NULL,
                pname VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                gender VARCHAR(255) NOT NULL,
                position VARCHAR(255) NOT NULL,
                description TEXT NOT NULL
            )`;
    console.log("Table player created successfully");

    // Insert data into table

    const insertPlayers = await Promise.all(
      players.map(
        (player) => client.sql`
          INSERT INTO player(id, imageURL, pname, age, gender, position, description) 
          VALUES(${player.id}, ${player.imageURL}, ${player.pname}, ${player.age}, ${player.gender}, ${player.position}, ${player.description})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertPlayers.length} customers`);

    return {
      player: insertPlayers,
    };
  } catch (error) {
    console.log("Error: ", error);
  }
}

// async function playerTable(client) {
//   try {
//     await client.sql`DROP TABLE IF EXISTS player`;
//     console.log("Table player dropped successfully");
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

async function connectDB() {
  try {
    const client = await db.connect();
    await playerTable(client);
  } catch (error) {
    console.log("Error: ", error);
  }
}

connectDB();
