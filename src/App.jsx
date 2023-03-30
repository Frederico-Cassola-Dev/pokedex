import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

import pokemonList from "./assets/pokemonList";

import { useState } from "react";

function App() {
  const [showPokemon, setShowPokemon] = useState(pokemonList);

  const handleClickPokemon = (name) => {
    setShowPokemon(pokemonList.filter((item) => item.name === name));
  };

  return (
    <div className="App">
      <NavBar
        pokemonListNames={pokemonList}
        choosePokemon={handleClickPokemon}
      />
      <PokemonCard {...showPokemon[0]} />
    </div>
  );
}

export default App;
