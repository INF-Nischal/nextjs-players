'use server';

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { player } from "./definitions";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const FormSchema = z.object({
  id: z.string(),
  imageURL: z
  .any()
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .webp formats are supported."
  ),
  pname: z.string().trim().min(1, { message: "Please enter a name." }),
  age: z.coerce.number().gt(0, { message: "Age must be greater than 0." }),
  gender: z.enum(["male", "female"], {
    invalid_type_error: "Please select a gender.",
  }),
  position: z.string().trim().min(1, { message: "Please enter a position." }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Please enter a short description." }),
});

export type State = {
  errors?: {
    imageURL?: string[];
    pname?: string[];
    age?: string[];
    gender?: string[];
    position?: string[];
    description?: string[];
  };
  message?: string | null;
};

const RegisterPlayer = FormSchema.omit({ id: true });

export async function registerPlayer(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = RegisterPlayer.safeParse({
    imageURL: formData.get("imageURL"),
    pname: formData.get("pname"),
    age: formData.get("age"),
    gender: formData.get("gender"),
    position: formData.get("position"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    console.log(validatedFields);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register Player.",
    };
  }

  const { imageURL, pname, age, gender, position, description } =
    validatedFields.data;

  try {
    console.log(imageURL.name, pname, age, position, description );
    await sql<player>`INSERT INTO player(imageurl, pname, age, gender, position, description)
          VALUES(${imageURL}, ${pname}, ${age}, ${gender}, ${position}, ${description})`;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to register player.",
    };
  }
  revalidatePath("/players");
  redirect("/players");
}

export async function deletePlayer(id: string) {
  try {
    await sql`DELETE FROM player WHERE id = ${id}`;
    revalidatePath("/players");
    return { message: "Player deleted successfully." };
  } catch (error) {
    console.log(error);
    return { message: "Database Error: Failed to delete player." };
  }
}