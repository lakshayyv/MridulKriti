import { atom } from "recoil";
import { AuthSelector } from "../selectors/auth";

export const AuthAtom = atom({
  key: "AuthAtom",
  default: AuthSelector,
});
