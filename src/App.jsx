import { useState } from "react";
import Titulo from "./components/Titulo";
import Tiempo from "./components/Tiempo";
import Dinero from "./components/Dinero";
import IconSettings from "./components/IconSettings";
import Validacion from "./components/Validación";
import PanelControl from "./components/PanelControl";

function App() {
  const [active, setActive] = useState(false);
  const [validarContraseña, setValidarContraseña] = useState(false);
  const [precioMinimo, setPrecioMinimo] = useState(500);
  const [precioMaximo, setPrecioMaximo] = useState(1300);
  const [tiempo, setTiempo] = useState(5);
  const [incrementarPrecio, setIncrementarPrecio] = useState(50);

  return (
    <div className="App">
      {validarContraseña ? (
        <Validacion setValidarContraseña={setValidarContraseña} />
      ) : validarContraseña === null ? (
        <PanelControl
          setValidarContraseña={setValidarContraseña}
          precioMinimo={precioMinimo}
          setPrecioMinimo={setPrecioMinimo}
          precioMaximo={precioMaximo}
          setPrecioMaximo={setPrecioMaximo}
          tiempo={tiempo}
          setTiempo={setTiempo}
          incrementarPrecio={incrementarPrecio}
          setIncrementarPrecio={setIncrementarPrecio}
        />
      ) : (
        <div
          className="
        flex justify-center items-center flex-col
        bg-gradient-to-br from-black to-gray-900
        w-full h-auto mx-auto xl:rounded-lg xl:mt-5
        sm:w-full md:w-full lg:w-full xl:w-4/12
        sm:p-4 md:p-6 lg:p-8 xl:p-10
      "
        >
          <Titulo />

          <Tiempo
            active={active}
            setActive={setActive}
            precioMinimo={precioMinimo}
            setPrecioMinimo={setPrecioMinimo}
          />

          <Dinero
            active={active}
            precioMinimo={precioMinimo}
            setPrecioMinimo={setPrecioMinimo}
            precioMaximo={precioMaximo}
            tiempo={tiempo}
            incrementarPrecio={incrementarPrecio}
          />

          <IconSettings
            validarContraseña={validarContraseña}
            setValidarContraseña={setValidarContraseña}
          />
        </div>
      )}
    </div>
  );
}

export default App;
