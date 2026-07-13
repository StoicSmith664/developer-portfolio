import { create } from 'zustand';

interface ScrollStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useScroll = create<ScrollStore>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
