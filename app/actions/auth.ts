import bcrypt from "bcryptjs";

import {
  SignupFormSchema,
  FormState,
  LoginFormState,
} from "@/libs/definitions";
import client from "@/libs/prismadb";
import { createSession, deleteSession } from "@/libs/session";
import { redirect } from "next/navigation";
import axios from "axios";

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

  const user = await axios.post("/api/users/signup", {
    name: name,
    email: email,
    hashedPassword: hashedPassword,
    isAdmin: false,
  });

  redirect("/play");
}

export async function onlogin(state: any, formData: FormData) {
  const userEmail = formData.get("email")?.toString();
  const userPassword = formData.get("password")?.toString();
  if (!userEmail) {
    return { error: "Email is required" };
  }
  const { data: user } = await axios.get("/api/users/login", {
    params: { email: userEmail },
  });
  if (!user) {
    return { error: "Email is not valid" };
  }
  if (!userPassword) {
    return { error: "Please enter password" };
  }
  const isCorrrectPassword = await bcrypt.compare(
    userPassword,
    user.hashedPassword
  );
  if (isCorrrectPassword) {
    createSession(user.id);
    redirect("/play");
  }
}

export async function logout() {
  deleteSession();
}
