"use client";

import { registerPlayer } from "@/app/lib/actions";
import { player } from "@/app/lib/definitions";
import { useFormState } from "react-dom";
import { useState } from "react";

export default function RegistrationForm({ players }: { players: player[] }) {
  const initialState = { message: null, error: {} };
  const [state, dispatch] = useFormState(registerPlayer, initialState);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageDataUrl(reader.result as string);
        console.log(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form action={dispatch} className="flex justify-center">
      <div className="p-5 flex flex-col w-[600px]">
        <h1 className="uppercase text-3xl font-bold mb-8">
          Register New Player
        </h1>
        <div className="flex flex-col mb-5">
          <div className="flex flex-col">
            <label htmlFor="player-image" className="mb-3">
              Image
              {imageDataUrl && (
                <div className="w-[120px] h-[120px] mt-3">
                  <img
                    src={imageDataUrl}
                    alt="Image"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </label>
            <input
              type="file"
              name="imageURL"
              id="player-image"
              onChange={handleImageChange}
            />
          </div>
          <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.imageURL &&
              state.errors.imageURL.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            name="pname"
            className="border-2 px-4 py-2"
            id="name"
          />
          <div id="pname-error" aria-live="polite" aria-atomic="true">
            {state.errors?.pname &&
              state.errors.pname.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
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
          />
          <div id="age-error" aria-live="polite" aria-atomic="true">
            {state.errors?.age &&
              state.errors.age.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
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
          <div id="gender-error" aria-live="polite" aria-atomic="true">
            {state.errors?.gender &&
              state.errors.gender.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
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
          />
          <div id="position-error" aria-live="polite" aria-atomic="true">
            {state.errors?.position &&
              state.errors.position.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="px-4 py-2 w-full h-[96px] border-2"
          ></textarea>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-black text-white px-5 py-2" type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
