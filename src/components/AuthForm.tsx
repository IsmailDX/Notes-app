"use client";

import { useRouter } from "next/navigation";
import { CardContent } from "./ui/card";

type Props = {
  type: "login" | "signUp";
};

const AuthForm = ({ type }: Props) => {
  const isLoginForm = type === "login";

  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted");
  };

  return (
    <form action={handleSubmit}>
      <CardContent>
        <div></div>
      </CardContent>
    </form>
  );
};

export default AuthForm;
