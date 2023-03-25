import { useState, useRef } from "react";
import Button from "./Button";
import { VscDebugStart as Start} from "react-icons/vsc";
import { AiOutlinePause as Pause } from "react-icons/ai";
import { MdRestartAlt as Restart } from "react-icons/md";

export default function Tiempo({active, setActive }) {
  const [time, setTime] = useState({ segundos: 0, minutos: 0, horas: 0 }); 
  const intervalId = useRef(null);

  function tictac() {
    setTime((tiempo) => {
      if (tiempo.segundos === 59) {
        return {
          segundos: 0,
          minutos: tiempo.minutos + 1,
          horas: tiempo.horas,
        };
      } else if (tiempo.minutos === 59) {
        return {
          segundos: 0,
          minutos: 0,
          horas: tiempo.horas + 1,
        };
      } else {
        return {
          segundos: tiempo.segundos + 1,
          minutos: tiempo.minutos,
          horas: tiempo.horas,
        };
      };
    });
  };

  const iniciar = () => {
    if (!active || active === null ) {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(tictac, 1000);
      setActive(!active);
    }
  };

  const detener = () => {
    clearInterval(intervalId.current);
    setActive(!active);
  };

  const reiniciar = () => {
    clearInterval(intervalId.current);
    setTime({ segundos: 0, minutos: 0, horas: 0 });
    setActive(null);
  };

  const formato = `${time.horas.toString().padStart(2, "0")}:${time.minutos
    .toString()
    .padStart(2, "0")}:${time.segundos.toString().padStart(2, "0")}`;

  return (
    <div className="text-white">
      <div className="text-white mt-10 w-60 mx-auto tracking-wider">
        <div className="bg-gray-800 rounded-lg shadow-xl p-4">
          <h3 className="text-3xl font-semibold text-center">{formato}</h3>
        </div>
      </div>

      <Button iniciar={iniciar} textContent="iniciar" icon={<Start />} />

      <Button detener={detener} textContent="detener" icon={<Pause />} />

      <Button
        reiniciar={reiniciar}
        textContent="reiniciar"
        icon={<Restart />}
      />
    </div>
  );
};

//* Te amo useRef <3

