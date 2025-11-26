import { create } from 'zustand';

interface AppState {
  // Add your state properties here
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
