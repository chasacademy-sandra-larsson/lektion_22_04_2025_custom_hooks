import { useState, useEffect } from "react";

export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
    base_experience: number;
    abilities: Array<{
        ability: {
            name: string;
        };
    }>;
}


    
    const [data, setData] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch pokemon data
    useEffect(() => {
        if (!name) return;
        
        const fetchPokemon = async () => {

            try {           
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch pokemon");
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An unknown error occurred');
                setLoading(false);
            }
        }
        fetchPokemon();
    }, [name]);

   
