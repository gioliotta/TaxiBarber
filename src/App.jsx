import { useState } from "react";
import Titulo from "./components/Titulo";
import Tiempo from "./components/Tiempo";
import Dinero from "./components/Dinero";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <div
        className="
      flex justify-center items-center flex-col border 
      bg-gradient-to-br from-black to-gray-900
      w-10/12 h-auto mx-auto mt-40 
      "
      >
        <Titulo />

        <Tiempo active={active} setActive={setActive} />

        <Dinero active={active} />
      </div>
    </div>
  );
};

export default App;
