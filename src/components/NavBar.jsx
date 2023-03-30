const NavBar = ({ list,handleClickPokemon }) => {

  return (
    <nav>
      {list.map((pokemon) => {
        return (<button key={pokemon.name} onClick={handleClickPokemon}>{pokemon.name}</button>);
      })}
    </nav>
  );
};

export default NavBar;
