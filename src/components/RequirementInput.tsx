import { useState } from "react";

export default function RequirementInput({
  onExtract,
}: {
  onExtract: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleExtract = () => {
    if (!text.trim()) {
      setErrorMessage("Please enter software requirements before extracting.");
      return;
    }

    setErrorMessage(""); // Clear error if input is valid
    onExtract(text);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <textarea
        className="w-3/4 min-h-[250px] p-3 border rounded-md resize-none"
        placeholder="Paste software requirements here..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (errorMessage) setErrorMessage(""); // Clear error on input change
        }}
      />
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <button
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer"
        onClick={handleExtract}
      >
        Extract Requirements
      </button>
    </div>
  );
}
