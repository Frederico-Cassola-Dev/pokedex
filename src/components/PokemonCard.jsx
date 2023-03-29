import PropTypes from "prop-types";

const PokemonCard = ({ pokemonName, pokemonImage}) => {
  return (
    <figure>
      {pokemonImage ? (
        <img src={pokemonImage } alt={`Image of ${pokemonName} pokemon`} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemonName}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    pokemonName: PropTypes.string.isRequired,
    pokemonImage: PropTypes.string.isRequired
  })
}

export default PokemonCard;
