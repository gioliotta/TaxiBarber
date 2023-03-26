import { useState } from "react";
import Button from "./Button";
import InputForm from "./InputForm";

export default function PanelControl({ setValidarContraseña }) {
  //TODO: Aplicar los cambios del form cuando se presione "Aplicar".

  return (
    <div
      className="
    flex justify-center items-center flex-col
    bg-gradient-to-br from-black to-gray-900
    w-full h-auto mx-auto md:rounded-lg xl:rounded-lg xl:mt-5
    sm:w-full md:w-full lg:w-full xl:w-4/12
    sm:p-4 md:p-6 lg:p-8 xl:p-10 text-white
  "
    >
      <form className="flex flex-col ">
        <InputForm
          htmlFor="min"
          textContent="Precio Mínimo:"
        />

        <InputForm htmlFor="max" textContent="Precio Máximo:" />

        <InputForm
          htmlFor="time"
          textContent="Cada cuánto tiempo incrementa el precio:"
        />

        <InputForm htmlFor="price" textContent="Cuánto incrementa el precio:" />
      </form>

      <div className="w-full flex justify-end gap-3 mt-14">
        <Button icon="Cancelar" setValidarContraseña={setValidarContraseña} />

        <Button
          icon="Aplicar"
        />
      </div>
    </div>
  );
};
