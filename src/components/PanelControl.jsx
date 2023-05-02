import Button from "./Button";
import InputForm from "./InputForm";

export default function PanelControl({
  setValidarContraseña,
  precioMinimo,
  setPrecioMinimo,
  precioMaximo,
  setPrecioMaximo,
  tiempo,
  setTiempo,
  incrementarPrecio,
  setIncrementarPrecio,
}) {
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
          precioMinimo={precioMinimo}
          setPrecioMinimo={setPrecioMinimo}
          htmlFor="min"
          textContent="Precio Mínimo:"
        />

        <InputForm
          precioMaximo={precioMaximo}
          setPrecioMaximo={setPrecioMaximo}
          htmlFor="max"
          textContent="Precio Máximo:"
        />

        <InputForm
          tiempo={tiempo}
          setTiempo={setTiempo}
          htmlFor="time"
          textContent="Cada cuánto tiempo incrementa el precio (segundos):"
        />

        <InputForm
          incrementarPrecio={incrementarPrecio}
          setIncrementarPrecio={setIncrementarPrecio}
          htmlFor="price"
          textContent="Cuánto incrementa el precio:"
        />
      </form>

      <div className="w-full flex justify-end gap-3 mt-14">
        <Button icon="Cancelar" setValidarContraseña={setValidarContraseña} />

        <Button icon="Aplicar" setValidarContraseña={setValidarContraseña} />
      </div>
    </div>
  );
}
