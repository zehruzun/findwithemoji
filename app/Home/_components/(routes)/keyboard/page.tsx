"use client";
import React from "react";
import { Button } from "@/components/ui/button";

interface KeyboardProps {
  userAnswer: string;
  setUserAnswer: (val: string) => void;
}

const letters = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"]
];

const Keyboard: React.FC<KeyboardProps> = ({ userAnswer, setUserAnswer }) => {
  const handleClick = (key: string) => {
    if (key === "BACKSPACE") {
      setUserAnswer(userAnswer.slice(0, -1));
    } else if (key === " ") {
      setUserAnswer(userAnswer + " ");
    } else {
      setUserAnswer(userAnswer + key);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {letters.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((letter) => (
            <Button key={letter} variant="outline" onClick={() => handleClick(letter)}>
              {letter}
            </Button>
          ))}
        </div>
      ))}
      <div className="flex gap-2 mt-2">
        <Button onClick={() => handleClick(" ")} variant="outline" className="w-32 h-10">Space</Button>
        <Button onClick={() => handleClick("BACKSPACE")} variant="outline" className="w-20 h-10">Delete</Button>
      </div>
    </div>
  );
};

export default Keyboard;
