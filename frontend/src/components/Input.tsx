import { ChangeEvent } from "react";
import { InputProps } from "../utils/types";

function Input(props: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.cb) {
      props.cb(e.target.value);
    } else if (props.imageCB) {
      const file = e.target.files?.[0];
      if (file) {
        props.imageCB(file);
      }
    }
  };

  return (
    <div className="w-full">
      <label className="font-bold">{props.label}</label>
      <input
        className="w-full px-7 py-5 border-2 rounded-lg border-gray-300 border-solid focus:border-black focus:border-4 outline-none font-semibold"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
        accept={props.imageCB && "image/*"}
        required
      />
    </div>
  );
}

export default Input;
