"use client";

import { updatePlayer } from "@/app/lib/actions";
import { player } from "@/app/lib/definitions";
import Link from "next/link";
import { useState } from "react";

export default function EditPlayer({player}: {player: player}) {
  const updatePlayerwithId = updatePlayer.bind(null, player.id);

  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const url = reader.result as string;
        setImageDataUrl(url);
      };

      reader.readAsDataURL(file);
    }
  };

  const convertImageToBase64 = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        ctx?.drawImage(img, 0, 0);

        const base64String = canvas.toDataURL("image/png");
        resolve(base64String);
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    if (imageDataUrl) {
      const base64Image = await convertImageToBase64(imageDataUrl as string);
      formData.set("imageURL", base64Image);
    }

    updatePlayerwithId(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="p-5 flex flex-col w-[600px]">
        <h1 className="uppercase text-3xl font-bold mb-8">Edit Player</h1>
        <div className="flex flex-col">
          <label htmlFor="player-image" className="mb-3">
            Image
          </label>
          <input type="file" name="imageURL" id="player-image" onChange={handleImageChange}/>
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            name="pname"
            className="border-2 px-4 py-2"
            id="name"
            defaultValue={player.pname}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="age" className="mb-2">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="border-2 px-4 py-2"
            id="age"
            defaultValue={player.age}
          />
        </div>
        <div className="flex flex-col justify-center mb-5">
          <div>
            <label htmlFor="gender">Gender</label>
            <span className="ml-8">
              <input type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male">Male</label>
            </span>
            <span className="ml-5">
              <input type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female">Female</label>
            </span>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="position" className="mb-2">
            Position
          </label>
          <input
            type="text"
            name="position"
            className="border-2 px-4 py-2"
            id="position"
            defaultValue={player.position}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="px-4 py-2 w-full h-[96px] border-2"
            defaultValue={player.description}
          ></textarea>
        </div>
        <div className="px-32 flex justify-between">
          <Link href="/players" className="rounded-lg text-center font-[500] shadow-lg py-2 text-lg w-[128px] bg-red-400 text-white">Cancel</Link>
          <button type="submit" className="rounded-lg text-center font-[500] shadow-lg py-2 text-lg w-[128px] bg-blue-400 text-white">Edit</button>
        </div>
      </div>
    </form>
  );
}
