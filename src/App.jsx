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

  return (
    <div className="App">
      {validarContraseña ? (
        <Validacion setValidarContraseña={setValidarContraseña} />
      ) : validarContraseña === null ? (
        <PanelControl setValidarContraseña={setValidarContraseña} />
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

          <Tiempo active={active} setActive={setActive} />

          <Dinero active={active} />

          <IconSettings
            validarContraseña={validarContraseña}
            setValidarContraseña={setValidarContraseña}
          />
        </div>
      )}
    </div>
  );
};

export default App;
