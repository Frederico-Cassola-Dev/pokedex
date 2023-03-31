import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

import pokemonList from "./assets/pokemonList";

import { useEffect, useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    
    return () => {
      alert("hello pokemon trainer :)");
    }
  }, [])
  
  
  return (
    <div className="App">
        <NavBar index={pokemonIndex} setIndex={setPokemonIndex} list={pokemonList}/>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;

