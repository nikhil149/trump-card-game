import bcrypt from "bcryptjs";

import { SignupFormSchema, FormState } from "@/libs/definitions";
import client from "@/libs/prismadb";
import { createSession, deleteSession } from "@/libs/session";
import { redirect } from "next/navigation";

export async function onsignup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // Call the provider or db to create a user...
  const name = validatedFields.data?.name;
  const email = validatedFields.data?.email;
  const password = validatedFields.data?.password;
  // e.g. Hash the user's password before storing it
  let hashedPassword = "";
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  let user = await client.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hashedPassword,
      isAdmin: false,
    },
  });

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(user.id);

  redirect("/play");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
