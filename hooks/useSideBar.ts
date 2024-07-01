import { create } from 'zustand';

interface SideBar {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSideBar= create<SideBar>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSideBar;