import { IResponsePayload } from "@/lib/response";
import { create } from "zustand";

type SongsStore = {
  search: string;
  result: IResponsePayload | null;
  setResult: (result: IResponsePayload<Array<unknown>> | null) => void;
  setSearch: (search: string) => void;
};

export const useSongsStore = create<SongsStore>((set) => ({
  search: "",
  result: null,
  setResult: (result) => set({ result }),
  setSearch: (search) => set({ search }),
}));
