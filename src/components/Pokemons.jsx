import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        const data = await response.json();
        setPokemonData(data.results);
        // console.log(JSON.stringify(data.results, null, 2))
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="pokemon-gallery">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default Pokemons;
