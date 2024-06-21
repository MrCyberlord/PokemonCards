import React from 'react';

const PokemonCard = ({ name, url }) => {
  const getPokemonId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  const pokemonId = getPokemonId(url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonCard;
