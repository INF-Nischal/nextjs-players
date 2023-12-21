import Header from "@/app/ui/header";
import EditPlayer from "@/app/ui/players/edit-form";
import { fetchPlayerById } from "@/app/lib/data";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = params.id;
  const player = await fetchPlayerById(id);
  if (!player) {
    return <div>Player not found</div>;
  }
  return (
    <section className="min-h-screen">
      <Header />
      <div className="min-h-[90vh]">
        <EditPlayer player={player} />
      </div>
    </section>
  );
}
