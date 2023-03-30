import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

import pokemonList from "./assets/pokemonList";

import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  return (
    <div className="App">
        <NavBar index={pokemonIndex} setIndex={setPokemonIndex} list={pokemonList}/>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;

