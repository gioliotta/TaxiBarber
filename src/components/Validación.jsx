import { useState } from "react";
import { AiOutlineArrowLeft as Atras } from "react-icons/ai";

export default function Validacion({ setValidarContraseña }) {
  const [contraseña, setContraseña] = useState("12345");
  const [esCorrecta, setEsCorrecta] = useState(null);

  function handleChange(e) {
    let value = e.target.value;
    if (value === contraseña) {
      return setEsCorrecta(true);
    } else {
      return setEsCorrecta(false);
    }
  }

  function comprobacion() {
    if (esCorrecta) {
      return setValidarContraseña(null);
    } else if (esCorrecta === false) {
      return alert("Contraseña Incorrecta");
    } else {
      return;
    }
  }

  return (
    <div
      className="
  bg-gradient-to-br from-black to-gray-900 
  w-full h-auto mx-auto xl:rounded-lg xl:mt-5 
  sm:w-full md:w-4/6 lg:w-4/12 xl:w-4/12
   mt-5 p-10"
    >
      <form
        onSubmit={event => event.preventDefault()}
        className="flex flex-col items-center"
      >
        <h1 className="text-white">CONTRASEÑA</h1>

        <input
          onChange={handleChange}
          type="password"
          placeholder="Ingrese la contraseña"
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none  focus:bg-gray-700"
          autoFocus
        />

        <button
          onClick={comprobacion}
          className="bg-yellow-500 hover:bg-yellow-600 text-white mt-4 font-bold py-2 px-4 rounded-lg"
        >
          Ingresar
        </button>
      </form>

      <button
        onClick={() => setValidarContraseña(false)}
        className="text-white text-2xl transform hover:scale-90"
      >
        <Atras />
      </button>
    </div>
  );
}
