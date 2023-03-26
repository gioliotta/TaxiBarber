export default function InputForm({ htmlFor, textContent }) {

  //! No funciona.
  function actualizarInputs(e) {
    let value = e.target.value;
    return value;
  };
  

  return (
    <div className="block mb-4">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-gray-300 mb-2"
      >
        {textContent}
      </label>
      <input
        defaultValue={0}
        id={htmlFor}
        type="number"
        className="border border-gray-300 rounded-lg ml-2 py-2 px-3 focus:outline-none  text-gray-800 w-20 h-8 appearance-none"
      />
    </div>
  );
};
