import { IResponsePayload } from "@/lib/response";
import { Song } from "@prisma/client";
import { create } from "zustand";

type SongsStore = {
  search: string;
  result: IResponsePayload<Song[] | null> | null;
  setResult: (result: IResponsePayload<Song[] | null> | null) => void;
  setSearch: (search: string) => void;
};

export const useSongsStore = create<SongsStore>((set) => ({
  search: "",
  result: null,
  setResult: (result) => set({ result }),
  setSearch: (search) => set({ search }),
}));
