"use client"
import { useState, useEffect } from "react"

const keys = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
]

interface EmojiItem {
  id: string
  emojis: string
  topic: string
  answerTR: string
}

export default function Keyboard() {
  const [input, setInput] = useState("")
  const [emojiList, setEmojiList] = useState<EmojiItem[]>([])
  const [resultEmoji, setResultEmoji] = useState<string>("")
  const [domain, setDomain] = useState<string>("")

  const addChar = (char: string) => setInput(prev => prev + char)
  const deleteChar = () => setInput(prev => prev.slice(0, -1))
  const addSpace = () => setInput(prev => prev + " ")

  const enterChar = () => {
    const normalizedInput = input.replace(/\s+/g, "").toLowerCase()
    const normalizedAnswers = emojiList.map(item => item.answerTR.replace(/\s+/g, "").toLowerCase())

    if (normalizedAnswers.includes(normalizedInput)) {
      setResultEmoji("✅ ✅ ✅")
    } else {
      setResultEmoji("❌ ❌ ❌")
    }

    setInput("")
    setTimeout(() => setResultEmoji(""), 2000)
  }

  useEffect(() => {
    // Client-side domain
    setDomain(window.location.host)

    async function fetchData() {
      const res = await fetch("https://findwithemoji-git-main-zehruzuns-projects.vercel.app/api") // görece path
      const data: EmojiItem[] = await res.json()
      setEmojiList(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") enterChar()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [input, emojiList])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-4">
        <div className="p-4 bg-gray-200 rounded-xl text-center font-semibold text-gray-800 text-6xl">
          {emojiList.length > 0 && (
            <span key={emojiList[0].id}>
              {resultEmoji || emojiList[0].emojis}
            </span>
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
