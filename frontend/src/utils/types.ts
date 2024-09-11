import {
  Dispatch,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
} from "react";

export type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
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
  cb?: Dispatch<SetStateAction<string>>;
  imageCB?: Dispatch<SetStateAction<File | undefined>>;
};

export type ButtonProps = {
  type?: "button" | "reset" | "submit";
  label: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type RouteProps = {
  element: ReactElement<any, any>;
};
