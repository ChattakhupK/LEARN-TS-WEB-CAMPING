"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

// const ex1: string = "String bla bla";

//Union Type กำหนดค่าให้ออกมาได้แค่ที่กำหนด
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};
export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className={`${className} capitalize`}
      size={size}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};
