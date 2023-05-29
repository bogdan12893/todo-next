"use client";
import { useCounterStore } from "../../store/pokeStore";
import { useEffect } from "react";

export const PokemonList = () => {
  const getPokemons = useCounterStore((state: any) => state.fetchPokemon);
  const pokemonList = useCounterStore((state: any) => state.pokemon);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  if (!pokemonList.length) {
    return "Loading";
  }

  return (
    <div>
      <ol>
        {pokemonList.map((item: any) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
};
