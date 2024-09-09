import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  className?: string;
  inputMode?:
    | "search"
    | "email"
    | "tel"
    | "text"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
  cb: Dispatch<SetStateAction<string>>;
};

export type ButtonProps = {
  type?: "button" | "reset" | "submit";
  label: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
