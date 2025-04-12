import { IResponsePayload } from "@/lib/response";
import { Song } from "@prisma/client";
import { create } from "zustand";

type SongsStore = {
  search: string;
  result: IResponsePayload<Song[] | null> | null;
  responseTime: number;
  setResult: (result: IResponsePayload<Song[] | null> | null) => void;
  setResponseTime: (responseTime: number) => void;
  setSearch: (search: string) => void;
};

export const useSongsStore = create<SongsStore>((set) => ({
  search: "",
  result: null,
  responseTime: 0,
  setResult: (result) => set({ result }),
  setResponseTime: (responseTime) => set({ responseTime }),
  setSearch: (search) => set({ search }),
}));
