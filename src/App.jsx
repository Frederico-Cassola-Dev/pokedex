import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;
