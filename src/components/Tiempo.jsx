import { useState, useRef } from "react";
import Button from "./Button";

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
    <div className="text-white mt-14">
      <div
        className="
    text-black border bg-slate-300 
      flex justify-center font-semibold
      "
      >
        <h3>{formato}</h3>
      </div>

      <Button iniciar={iniciar} textContent="Iniciar" />

      <Button detener={detener} textContent="Detener" />

      <Button reiniciar={reiniciar} textContent="Reiniciar" />
    </div>
  );
};

//* Te amo useRef <3

