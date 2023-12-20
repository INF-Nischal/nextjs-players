import Header from "../ui/header";
import RegistrationForm from "@/app/ui/players/register";
import { fetchPlayers } from "../lib/data";

export default async function Players() {
  const players = await fetchPlayers();
  return (
    <section>
      <Header />
      <RegistrationForm players={players} />
    </section>
  );
}
