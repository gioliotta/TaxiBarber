export default function Button({
  saveData,
  iniciar,
  reiniciar,
  textContent,
  icon,
  setValidarContraseña,
  setContraseñaCorrecta,
}) {
  function handleClick() {
    if (textContent == "iniciar") {
      return iniciar();
    } else if (textContent == "reiniciar") {
      return reiniciar();
    }
  }

  const aplicar = () => {
    if (confirm("¿Estás seguro de aplicar estos cambios?")) {
      setContraseñaCorrecta(false);
      setValidarContraseña(false);
      return saveData();
    }
  };

  // const cancelar = () => {
  //   setAplicarCambios(false);
  //   setContraseñaCorrecta(false);
  //   return setValidarContraseña(false);
  // };

  return (
    <button
      onClick={icon == "Aplicar" ? aplicar : handleClick}
      className={
        icon == "Aplicar"
          ? "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-3 rounded-lg"
          : "text-3xl mt-5 mx-4 bg-yellow-500 text-white p-3 rounded-lg border border-yellow-700 hover:bg-yellow-600 hover:text-white transition duration-200 ease-in-out"
      }
    >
      {icon}
    </button>
  );
}
