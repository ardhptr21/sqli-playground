import { IResponsePayload } from "@/lib/response";
import { create } from "zustand";

type LoginStore = {
  credentials: {
    username: string;
    password: string;
  };
  result: IResponsePayload | null;
  setResult: (result: IResponsePayload | null) => void;
  setCredentials: (credentials: {
    username?: string;
    password?: string;
  }) => void;
};

export const useLoginStore = create<LoginStore>((set) => ({
  credentials: {
    username: "",
    password: "",
  },
  result: null,
  setResult: (result) => set({ result }),
  setCredentials: (credentials) =>
    set((state) => ({
      credentials: {
        ...state.credentials,
        ...credentials,
      },
    })),
}));
