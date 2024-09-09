import { ButtonProps } from "../utils/types";

function Button(props: ButtonProps) {
  return (
    <button
      className="w-full p-5 bg-black rounded-lg text-white font-bold"
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
