import { SlSettings as ConfiguracionIcono } from "react-icons/sl";

export default function IconSettings({ setValidarContraseña }) {
  return (
    <div className="text-white w-full flex justify-end">
      <button onClick={() => setValidarContraseña(true)}>
        <ConfiguracionIcono className="text-3xl cursor-pointer hover:text-yellow-500" />
      </button>
    </div>
  );
}
