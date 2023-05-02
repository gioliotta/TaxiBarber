import { useEffect, useRef } from "react";

export default function Dinero({
  active,
  precioMinimo,
  setPrecioMinimo,
  precioMaximo,
  tiempo,
  incrementarPrecio,
}) {
  const intervalId = useRef(null);

  const PRECIO_MAXIMO_ALCANZADO = () => {
    clearInterval(intervalId.current);
    setPrecioMinimo(Number(precioMinimo));
  };

  useEffect(() => {
    if (active) {
      intervalId.current = setInterval(() => {
        setPrecioMinimo(
          precioActual => Number(precioActual) + Number(incrementarPrecio),
        );
      }, tiempo * 1000);
    } else {
      clearInterval(intervalId.current);
      if (active === null) {
        setPrecioMinimo(precioMinimo);
      }
    }

    return () => clearInterval(intervalId.current);
  }, [active]);

  useEffect(() => {
    if (precioMinimo >= precioMaximo) {
      return PRECIO_MAXIMO_ALCANZADO();
    }
  }, [precioMinimo]);

  return (
    <div className="w-28 h-24 border-2 rounded-lg border-yellow-500 bg-gray-800 flex justify-center items-center m-8">
      <h2 className="text-white text-3xl font-bold">${precioMinimo}</h2>
    </div>
  );
}
