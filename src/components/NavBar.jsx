const NavBar = ({ index, setIndex, list }) => {
  const handleClickPrevious = () => {
    setIndex(index - 1);
  };

  const handleClickNext = () => {
    setIndex(index + 1);
  };

  return (
    <nav>
      {index > 0 && (
        <button onClick={handleClickPrevious}>précédent</button>
      )}
      {index < list.length - 1 && (
        <button onClick={handleClickNext}>suivant</button>
      )}
    </nav>
  );
};

export default NavBar;
