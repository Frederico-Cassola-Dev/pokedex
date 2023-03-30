const NavBar = ({ pokemonListNames, choosePokemon }) => {
  return (
    <nav>
      {pokemonListNames.map((pokemon) => {
        return (
          <button key={pokemon.name} onClick={() => choosePokemon(pokemon.name)}>
            {pokemon.name}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
