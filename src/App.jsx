import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

import pokemonList from "./assets/pokemonList";

import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(pokemonList[0]);

  const handleClickPokemon = () => {
    setPokemon(
      pokemonList.filter((item) => item.name === pokemon.name)
    );
  };

  console.log("🚀 ~ file: App.jsx:11 ~ App ~ pokemon:", pokemon);

  return (
    <div className="App">
      <NavBar list={pokemonList} handleClickPokemon={handleClickPokemon} />

      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
