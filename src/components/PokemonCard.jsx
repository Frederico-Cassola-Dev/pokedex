import PropTypes from "prop-types";

const PokemonCard = ({ imgSrc, name }) => {
  return (
    <figure>
      {imgSrc ? (
        <img src={imgSrc} alt={`Image of ${name} pokemon`} />
      ) : (
        <p>???</p>
      )}
      <figcaption className="pokemon-name">{name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
