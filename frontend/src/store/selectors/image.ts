import { selector } from "recoil";
import { fetchAll } from "../../api/image";

export const AllImageSelector = selector({
  key: "AllImageSelector",
  get: async () => {
    const response = await fetchAll();
    return response;
  },
});
