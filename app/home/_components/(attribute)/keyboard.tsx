"use client";
import { removeCookie } from "@/utils/cookie";
import { useEffect, useRef } from "react";

interface KeyboardProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit?: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ value, onChange, onSubmit }) => {
  const topRow = "QWERTYUIOP".split("");
  const middleRow = "ASDFGHJKL".split("");
  const bottomRow = "ZXCVBNM".split("");

  const valueRef = useRef(value);
  valueRef.current = value; // her render sonrası güncel value

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(e.key)) {
        onChange(valueRef.current);
      } else if (e.key === "Backspace") {
        onChange(valueRef.current.slice(0, -1));
      } else if (e.key === "Enter") {
        if (onSubmit) onSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onChange, onSubmit]); // value burada bağımlılık değil

  const insertChar = (char: string) => {
    onChange(valueRef.current + char);
  };

  const handleDelete = () => {
    onChange(valueRef.current.slice(0, -1));
    removeCookie("userAnswerTime"); // cookie'yi sil
    
  };

  return (
    <div className="flex flex-col items-center space-y-2 w-full">
      {/* Üst satır */}
      <div className="flex space-x-2">
        {topRow.map((k) => (
          <button key={k} onClick={() => insertChar(k)} className="bg-gray-300 px-3 py-2 rounded-md shadow-inner hover:bg-gray-400 active:translate-y-0.5 transition-transform">{k}</button>
        ))}
      </div>
      {/* Orta satır */}
      <div className="flex space-x-2">
        {middleRow.map((k) => (
          <button key={k} onClick={() => insertChar(k)} className="bg-gray-300 px-3 py-2 rounded-md shadow-inner hover:bg-gray-400 active:translate-y-0.5 transition-transform">{k}</button>
        ))}
      </div>
      {/* Alt satır + DEL */}
      <div className="flex space-x-2">
        {bottomRow.map((k) => (
          <button key={k} onClick={() => insertChar(k)} className="bg-gray-300 px-3 py-2 rounded-md shadow-inner hover:bg-gray-400 active:translate-y-0.5 transition-transform">{k}</button>
        ))}
        <button onClick={handleDelete} className="bg-red-400 px-4 py-2 rounded-md shadow-inner hover:bg-red-500 active:translate-y-0.5 transition-transform">DEL</button>
      </div>
      {/* Enter ve Space */}
      <div className="flex w-full justify-center space-x-4">
        <button onClick={() => onSubmit && onSubmit()} className="bg-blue-400 px-6 py-2 rounded-md shadow-inner hover:bg-blue-500 active:translate-y-0.5 transition-transform">ENTER</button>
        <button onClick={() => insertChar(" ")} className="bg-gray-300 px-16 py-2 rounded-md shadow-inner hover:bg-gray-400 active:translate-y-0.5 transition-transform">SPACE</button>
      </div>
    </div>
  );
};

export default Keyboard;
