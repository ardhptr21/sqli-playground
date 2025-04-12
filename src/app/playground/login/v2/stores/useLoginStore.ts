import { IResponsePayload } from "@/lib/response";
import { create } from "zustand";

type LoginStore = {
  credentials: {
    username: string;
    password: string;
  };
  responseTime: number;
  result: IResponsePayload | null;
  setResult: (result: IResponsePayload | null) => void;
  setResponseTime: (responseTime: number) => void;
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
  responseTime: 0,
  result: null,
  setResult: (result) => set({ result }),
  setResponseTime: (responseTime) => set({ responseTime }),
  setCredentials: (credentials) =>
    set((state) => ({
      credentials: {
        ...state.credentials,
        ...credentials,
      },
    })),
}));
