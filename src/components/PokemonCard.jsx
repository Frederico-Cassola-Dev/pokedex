
const Figure = (props) => {
  const { name, imgSrc} = props;


    return (
      <figure>
        { imgSrc ? <img src={imgSrc} alt={`Image of ${name} pokemon`} /> : <p>???</p>}
        <figcaption>{name}</figcaption>
      </figure>
    );
};

export default Figure;
