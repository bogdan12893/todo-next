import { create } from "zustand";

export const useCounterStore = create((set, get) => ({
  pokemon: [],
  number: 123,
  increaseCounterNumber: () =>
    set((state: any) => ({ number: state.number + 1 })),
  decreaseCounterNumber: () =>
    set((state: any) => ({ number: state.number - 1 })),
  logNumber: () => {
    console.log(` Current number value equals ${get().number}`);
  },
  fetchPokemon: async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => set({ pokemon: data.results }));
  },
}));
