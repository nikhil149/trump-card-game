"use client";
import { useFormState } from "react-dom";
import { onlogin } from "../actions/auth";
import SignupButton from "@/components/signup-button";

const Login = () => {
  const [state, action] = useFormState(onlogin, undefined);
  return (
    <div>
      <form action={action}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <SignupButton buttonText="Login" />
      </form>
    </div>
  );
};

export default Login;
