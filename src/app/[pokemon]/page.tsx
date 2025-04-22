"use client";

import { usePokemon } from "@/app/hooks/usePokemon";
import type { Pokemon } from "@/app/hooks/usePokemon";

export default function PokemonPage({ params }: { params: { pokemon: string } }) {
    
    const { data, loading, error } = usePokemon(params.pokemon);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>Height: {data.height}</p>    
            <p>Weight: {data.weight}</p>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>Base Experience: {data.base_experience}</p>
            <p>Abilities:</p>
            <ul>
                {data.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}