export default function Button({ iniciar, detener, reiniciar, textContent, icon }) {

  function handleClick() {
    if (textContent == "iniciar") {
      return iniciar();
    } else if (textContent == "detener") {
      return detener();
    } else if (textContent == "reiniciar") {
      return reiniciar();
    } else {
      return null;
    };
  };

  return (
    <button
      onClick={handleClick}
      className="text-3xl mt-5 mx-4 bg-yellow-500 text-white p-3 rounded-lg border border-yellow-700 hover:bg-yellow-600 hover:text-white transition duration-200 ease-in-out"
    >
        {icon}     
    </button>
  );
};
