import Header from "@/app/ui/header";
import { fetchPlayers } from "@/app/lib/data";
import DeletePlayer from "../ui/players/Buttons";

export default async function Players() {
  const players = await fetchPlayers();
  return (
    <section className="min-h-screen">
      <Header />
      <div className="p-8">
        <h1 className="font-bold text-2xl uppercase">All Players</h1>
        <div className="min-h-[90vh] grid grid-cols-2 gap-5 pt-5">
          {players.map((player) => (
            <div key={player.id} className="flex border-4 h-[360px] rounded-lg">
              <div className="border-2 w-1/3">
                <img
                  src={player.imageurl}
                  alt={player.pname}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-5 w-2/3 flex flex-col justify-between bg-slate-300">
                <div>
                  <p className="font-bold">
                    Name: <span className="font-normal">{player.pname}</span>
                  </p>
                  <p className="font-bold">
                    Age: <span className="font-normal">{player.age}</span>
                  </p>
                  <p className="font-bold">
                    Gender: <span className="font-normal">{player.gender}</span>
                  </p>
                  <p className="font-bold">
                    Position:{" "}
                    <span className="font-normal">{player.position}</span>
                  </p>
                  <p className="font-bold h-[60px]">
                    Description:{" "}
                    <span className="font-normal overflow-hidden">
                      {player.description}
                    </span>
                  </p>
                </div>
                <DeletePlayer id={player.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
