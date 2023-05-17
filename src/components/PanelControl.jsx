import { useEffect } from "react";
import Button from "./Button";
import InputForm from "./InputForm";

export default function PanelControl({
  saveData,
  contraseña,
  setContraseña,
  setValidarContraseña,
  setContraseñaCorrecta,
  precioMinimo,
  setPrecioMinimo,
  precioMaximo,
  setPrecioMaximo,
  tiempo,
  setTiempo,
  incrementarPrecio,
  setIncrementarPrecio,
}) {
  useEffect(() => {
    saveData();
  }, [contraseña]);

  function nuevaContraseña(contraseñaActual) {
    if (prompt("Ingrese la contraseña actual") === contraseñaActual) {
      let nueva = prompt("Ingrese su nueva contraseña");
      setContraseña(nueva);
      alert(`Su nueva contraseña es: ${nueva}`);
    } else {
      return alert("Contraseña incorrecta");
    }
  }

  return (
    <div
      className="flex justify-center items-center flex-col
    bg-gradient-to-br from-black to-gray-900
    w-full h-auto mx-auto md:rounded-lg xl:rounded-lg xl:mt-5
    sm:w-full md:w-full lg:w-full xl:w-4/12
    sm:p-4 md:p-6 lg:p-8 xl:p-10 text-white
  "
    >
      <form className="flex flex-col ">
        <InputForm
          saveData={saveData}
          precioMinimo={precioMinimo}
          setPrecioMinimo={setPrecioMinimo}
          htmlFor="min"
          textContent="Precio Mínimo:"
        />

        <InputForm
          saveData={saveData}
          precioMaximo={precioMaximo}
          setPrecioMaximo={setPrecioMaximo}
          htmlFor="max"
          textContent="Precio Máximo:"
        />

        <InputForm
          saveData={saveData}
          tiempo={tiempo}
          setTiempo={setTiempo}
          htmlFor="time"
          textContent="Cada cuánto tiempo incrementa el precio (segundos):"
        />

        <InputForm
          saveData={saveData}
          incrementarPrecio={incrementarPrecio}
          setIncrementarPrecio={setIncrementarPrecio}
          htmlFor="price"
          textContent="Cuánto incrementa el precio:"
        />
      </form>

      <h3
        onClick={() => nuevaContraseña(contraseña)}
        className="text-start mt-5 bg-slate-500 rounded p-1 text-white font-bold cursor-pointer"
      >
        Cambiar contraseña
      </h3>

      <div className="w-full flex justify-end gap-3 mt-14">
        <Button
          saveData={saveData}
          icon="Aplicar"
          setValidarContraseña={setValidarContraseña}
          setContraseñaCorrecta={setContraseñaCorrecta}
        />
      </div>
    </div>
  );
}
