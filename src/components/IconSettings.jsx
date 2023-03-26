import { SlSettings } from "react-icons/sl";

export default function IconSettings({
  validarContraseña,
  setValidarContraseña
}) {
  return (
    <div className="text-white w-full flex justify-end">
      <button onClick={() => setValidarContraseña(true)}>
        <SlSettings
          validarContraseña={validarContraseña}
          setValidarContraseña={setValidarContraseña}
          className="text-3xl cursor-pointer hover:text-yellow-500"
        />
      </button>
    </div>
  );
};
