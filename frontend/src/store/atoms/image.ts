import { atom } from "recoil";
import { AllImageSelector } from "../selectors/image";

export const AllImageAtom = atom({
  key: "AllImageAtom",
  default: AllImageSelector,
});
