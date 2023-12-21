import { deletePlayer } from "@/app/lib/actions";
import { updatePlayer } from "@/app/lib/actions";
import Link from "next/link";

export function DeletePlayer({ id }: { id: string }) {
  const deletePlayerWithId = deletePlayer.bind(null, id);

  return (
    <form action={deletePlayerWithId} className="w-full flex justify-center">
      <button className="text-white bg-red-500 font-xl w-[96px] px-4 py-2 font-bold rounded-lg flex justify-center items-center">
        Delete
      </button>
    </form>
  );
}

export function UpdatePlayer({ id }: { id: string }) {
  const updatePlayerWithId = updatePlayer.bind(null, id);

  return (
    <form action={updatePlayerWithId} className="w-full flex justify-center">
      <Link href={`players/${id}/edit`} className="text-white bg-green-500 font-xl w-[96px] px-4 py-2 font-bold rounded-lg flex justify-center items-center">
        Update
      </Link>
    </form>
  );
}
