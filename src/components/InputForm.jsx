export default function InputForm({
  htmlFor,
  textContent,
  setPrecio,
  precioMinimo,
  setPrecioMinimo,
  precioMaximo,
  setPrecioMaximo,
  tiempo,
  setTiempo,
  incrementarPrecio,
  setIncrementarPrecio,
}) {
  function valorPorDefecto() {
    if (htmlFor === "min") {
      return precioMinimo;
    } else if (htmlFor === "max") {
      return precioMaximo;
    } else if (htmlFor === "time") {
      return tiempo;
    } else if (htmlFor === "price") {
      return incrementarPrecio;
    }
  }

  const ACTUALIZAR_INPUTS = e => {
    const valorInput = e.target.value;
    if (htmlFor === "min") {
      setPrecioMinimo(valorInput);
    } else if (htmlFor === "max") {
      setPrecioMaximo(valorInput);
    } else if (htmlFor === "time") {
      setTiempo(valorInput);
    } else if (htmlFor === "price") {
      setIncrementarPrecio(valorInput);
    }
  };
  return (
    <div className="block mb-4">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-gray-300 mb-2"
      >
        {textContent}
      </label>
      <input
        defaultValue={valorPorDefecto()}
        onChange={ACTUALIZAR_INPUTS}
        id={htmlFor}
        type="number"
        className="border border-gray-300 rounded-lg ml-2 py-2 px-3 focus:outline-none  text-gray-800 w-20 h-8 appearance-none"
      />
    </div>
  );
}
