"use client";

import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { usePokemon } from "../hooks/usePokemon";
import type { Pokemon } from "../hooks/usePokemon";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Pokemon | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, loading, error } = usePokemon(debouncedSearchTerm);

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data]);

  return (
    <>
        <input
        type="text"
        placeholder="Sök Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {searchResults && (
        <div>
            <h2>{searchResults.name}</h2>
            <img src={searchResults.sprites.front_default} alt={searchResults.name} />
            <p>Height: {searchResults.height}</p>
            <p>Weight: {searchResults.weight}</p>
            <p>Base Experience: {searchResults.base_experience}</p>
            <p>Abilities:</p>
            <ul>
                {searchResults.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
        )}
    </>
  );
}