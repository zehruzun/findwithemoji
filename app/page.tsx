"use client"

import { useState, useEffect } from "react"

// Klavye tuşları
const keys = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
]

// API’den gelecek emoji objesi tipi
interface EmojiItem {
  id: string
  emojis: string
  topic: string
}

export default function Keyboard() {
  const [input, setInput] = useState("")
  const [emojiList, setEmojiList] = useState<EmojiItem[]>([])

  const addChar = (char: string) => setInput(prev => prev + char)
  const deleteChar = () => setInput(prev => prev.slice(0, -1))
  const enterChar = () => alert(`Your answer: ${input}`)
  const addSpace = () => setInput(prev => prev + " ")

  // API’den veri çek
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://findwithemoji.vercel.app/api")
      const data: EmojiItem[] = await res.json()
      setEmojiList(data)
    }
    fetchData()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4">
        
        {/* Soru Kartı */}
        <div className="p-4 bg-gray-200 rounded-xl text-center font-semibold text-gray-800">
          {emojiList.length > 0 && (
            <p className="text-6xl" key={emojiList[0].id}>
              {emojiList[0].emojis}
            </p>
          )}
        </div>

        {/* Input */}
        <input
          type="text"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          maxLength={20}
        />

        {/* Klavye */}
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
