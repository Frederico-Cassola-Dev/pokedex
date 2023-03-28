const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const Figure = () => {
  const pokemon = pokemonList[0];

    return (
      <figure>
        { pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={`Image of ${pokemon.name} pokemon`} /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
};

export default Figure;
