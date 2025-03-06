import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Store = {
  message: string;
};

const useStore = create<Store>()(
  devtools(
    () => ({
      message: 'Hello World !',
    }),
    { name: 'sampleStore' }
  )
);

export default useStore;
