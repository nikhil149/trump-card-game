"use client";

import { useFormStatus, useFormState } from "react-dom";

export default function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Submitting..." : "Sign up"}
    </button>
  );
}
