import "./App.css";
import PokemonCard from "./components/PokemonCard";

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

function App() {
  const {name, imgSrc} = pokemonList[0];

  return (
    <div className="App">
      <div>
        <PokemonCard pokemonName={name} pokemonImage={imgSrc} />
      </div>
    </div>
  );
}

export default App;
