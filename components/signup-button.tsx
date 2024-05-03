"use client";

import { useFormStatus, useFormState } from "react-dom";

export default function SignupButton({ buttonText }: { buttonText: string }) {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Submitting..." : buttonText}
    </button>
  );
}
