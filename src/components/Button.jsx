export default function Button({ iniciar, detener, reiniciar, textContent }) {

  function handleClick() {
    if (textContent == "Iniciar") {
      return iniciar();
    } else if (textContent == "Detener") {
      return detener();
    } else if (textContent == "Reiniciar") {
      return reiniciar();
    } else {
      return null;
    };
  };

  return (
    <button className="border m-5" onClick={handleClick}>
      {textContent}
    </button>
  );
};
