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
  const pokemon = pokemonList[1];

    return (
      <figure>
        { pokemon.imgSrc !== undefined  ? <img src={pokemon.imgSrc} alt="Image of pokemon" /> : <p>???</p>}
        <figcaption>bulbasaur</figcaption>
      </figure>
    );
};

export default Figure;
