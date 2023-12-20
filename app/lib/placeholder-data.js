const players = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    imageURL:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    pname: "John Doe",
    age: 24,
    gender: "male",
    position: "Goalkeeper",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442b",
    imageURL:
      "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    pname: "Jane Smith",
    age: 22,
    gender: "female",
    position: "Forward",
    description:
      "Jane is a dynamic forward known for her lightning-fast sprints and precise goal-scoring abilities. Off the field, she brings infectious energy to the team, fostering a positive and determined spirit among her teammates.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442c",
    imageURL:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Mark Johnson",
    age: 28,
    gender: "male",
    position: "Defender",
    description:
      "Mark is a seasoned defender with an impeccable sense of timing and a knack for intercepting opponent plays. His leadership qualities make him a vital asset both on and off the field, inspiring his teammates to strive for excellence.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442d",
    imageURL:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    pname: "Emily Taylor",
    age: 25,
    gender: "female",
    position: "Midfielder",
    description:
      "Emily is a midfield maestro, orchestrating plays with finesse and vision. Her technical skills, combined with a tenacious work ethic, make her a driving force in the team's pursuit of victory. Off the field, she's known for her sportsmanship and dedication.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442e",
    imageURL:
      "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Alex Rodriguez",
    age: 26,
    gender: "male",
    position: "Goalkeeper",
    description:
      "Alex, the reliable goalkeeper, is a guardian of the goalposts with lightning reflexes and strategic anticipation. His calm demeanor under pressure and precise distribution make him an integral part of the team's defensive strategy.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a64427",
    imageURL:
      "https://images.unsplash.com/photo-1586682643135-060f061868b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Mia Turner",
    age: 23,
    gender: "female",
    position: "Striker",
    description:
      "Mia, the striking sensation, is known for her clinical finishing and flair on the ball. Her ability to create scoring opportunities and dominate in one-on-one situations makes her a formidable force in the attacking third.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a64426",
    imageURL:
      "https://images.unsplash.com/photo-1586716402203-79219bede43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Liam Davis",
    age: 27,
    gender: "male",
    position: "Midfielder",
    description:
      "Liam's midfield prowess lies in his precise passing and strategic ball control. A box-to-box player, he contributes both defensively and offensively, providing a dynamic presence that elevates the team's overall performance.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a64425",
    imageURL:
      "https://images.unsplash.com/photo-1607957159143-de3859adca2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Chloe Martinez",
    age: 24,
    gender: "female",
    position: "Defender",
    description:
      "Chloe, a rock-solid defender, combines physicality with tactical awareness to thwart opposing attacks. Her ability to read the game and make crucial interceptions has earned her a reputation as a reliable and resilient defender.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a64424",
    imageURL:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Jordan White",
    age: 29,
    gender: "male",
    position: "Forward",
    description:
      "Jordan is a seasoned forward celebrated for his goal-scoring prowess and strategic positioning. With a keen eye for goal and a natural instinct for creating scoring opportunities, he remains a consistent threat to opposing defenses.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a64423",
    imageURL:
      "https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Isabella Lopez",
    age: 26,
    gender: "female",
    position: "Goalkeeper",
    description:
      "Isabella, the agile goalkeeper, possesses remarkable reflexes and a commanding presence in the penalty area. Her ability to organize the defense and make crucial saves under pressure makes her an indispensable asset to the team.",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a64422",
    imageURL:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    pname: "Ethan Reed",
    age: 25,
    gender: "male",
    position: "Striker",
    description:
      "Ethan, the dynamic striker, is known for his goal-scoring instincts and agility. Whether with powerful strikes or well-timed headers, he consistently delivers when the team needs a decisive finish in the attacking third.",
  },
];

module.exports = players;
