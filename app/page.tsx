"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"

const keys = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
]

export default async function Keyboard() {
  const [input, setInput] = useState("")

  const addChar = (char: string) => setInput(prev => prev + char)
  const deleteChar = () => setInput(prev => prev.slice(0, -1))
  const enterChar = () => alert(`Your answer: ${input}`)
  const addSpace = () => setInput(prev => prev + " ")
  
  const res = await fetch("http://localhost:3000/api");
  const emojiList = await res.json();


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4">
        
        {/* Küçük yüzen kart
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white font-semibold px-6 py-1 rounded-xl shadow-md z-10">
          <p className="text-zinc-50" key={emojiList[0].id}>{emojiList[0].topic}</p>

        </div> */}

        <div className="p-4 bg-gray-200 rounded-xl text-center font-semibold text-gray-800 ">
          {emojiList.length > 0 && (
            <p className="text-6xl" key={emojiList[0].id}>{emojiList[0].emojis}</p>
          )}
        </div>

        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          maxLength={20}
        />

        {keys.map((row, idx) => (
          <div key={idx} className="flex justify-center gap-2">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => addChar(key)}
                className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-500 active:scale-95 transition"
              >
                {key}
              </button>
            ))}
          </div>
        ))}

        {/* Özel tuşlar */}
        <div className="flex justify-center gap-2">
          <button
            onClick={addSpace}
            className="bg-gray-400 text-white font-semibold py-2 px-8 rounded-lg shadow hover:bg-gray-500 active:scale-95 transition"
          >
            Space
          </button>
          <button
            onClick={deleteChar}
            className="bg-red-400 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-500 active:scale-95 transition"
          >
            Delete
          </button>
          <button
            onClick={enterChar}
            className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-500 active:scale-95 transition"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}
