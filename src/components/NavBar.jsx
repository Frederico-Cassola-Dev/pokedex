const NavBar = ({ index, setIndex, list }) => {
  const handleClickPrevious = () => {
    index === 2 && alert("pika pikachu !!!");
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    index === 2 && alert("pika pikachu !!!");
    setIndex(index + 1);
  };

  return (
    <nav>
      {index > 0 && <button onClick={handleClickPrevious}>précédent</button>}
      {index < list.length - 1 && (
        <button onClick={handleClickNext}>suivant</button>
      )}
    </nav>
  );
};

export default NavBar;
