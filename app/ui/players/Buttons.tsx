import { deletePlayer } from "@/app/lib/actions";

export default function DeletePlayer({ id }: { id: string }) {
  const deletePlayerWithId = deletePlayer.bind(null, id);

  return (
    <form action={deletePlayerWithId} className="w-full flex justify-center">
      <button className="text-white bg-red-500 font-xl w-1/5 px-4 py-2 font-bold rounded-lg flex items-center">
        Delete
      </button>
    </form>
  );
}
