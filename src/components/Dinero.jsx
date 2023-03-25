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
      if (active === null) {
        setPrecio(600);
      };
    };

    return () => {
      clearInterval(intervalId.current);
    };
  }, [active]);

  return (
    <div class="w-28 h-24 border-2 rounded-lg border-yellow-500 bg-gray-800 flex justify-center items-center m-8">
      <h2 class="text-white text-3xl font-bold">${precio}</h2>
    </div>
  );
};
