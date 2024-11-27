"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";

const TextAreaInput = ({
  name,
  LabelText,
  defaultValue,
}: {
  name: string;
  LabelText?: string;
  defaultValue?: string;
}) => {
  const [text, setText] = useState("");

  const handleInputChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {LabelText || name} | {text.length} / 200
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={4}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};
export default TextAreaInput;
