import { useState, useEffect, useRef } from "react";

export default function Dinero({ active }) {
  const [precio, setPrecio] = useState(600);
  const intervalId = useRef(null);

  useEffect(() => {
    if (active) {
      intervalId.current = setInterval(() => {
        setPrecio((precioActual) => precioActual + 20);
      }, 5000);
    } else {
      clearInterval(intervalId.current);
      setPrecio(precio);
      if (active === null) {
        setPrecio(600);
      }
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [active]);

  return (
    <div className="w-28 h-24 border bg-slate-400 flex justify-center items-center m-8">
      <h2 className="text-black text-3xl">${precio}</h2>
    </div>
  );
};

