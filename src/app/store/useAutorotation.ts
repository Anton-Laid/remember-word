import { create } from "zustand";
import { IUser } from "../../shared/types/user";

interface ConversationState {
  token: boolean;
  user: IUser;
  setToken: (bool: boolean) => void;
  setUser: (user: IUser) => void;
}

const useAutorotation = create<ConversationState>((set) => ({
  token: false,
  setToken: (bool) => set({ token: bool }),
  user: {
    second_name: null,
    first_name: null,
    third_name: null,
    gender: null,
  },
  setUser: (user) => set({ user }),
}));

export default useAutorotation;
