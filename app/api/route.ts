export async function GET() {
    const emojiGameExamples = [
        {
          emojis: "🧙‍♂️ ⚡ 🪄",
          answerTR: "harrypotter",
          answerEN: "harrypotter",
          answerES: "harrypotter",
          answerDE: "harrypotter",
        },
        {
          emojis: "🦁 👑 🗡️",
          answerTR: "aslankrali",
          answerEN: "lionking",
          answerES: "reyleon",
          answerDE: "koniglion",
        },
        {
          emojis: "🧛‍♂️ 🦇 🏰",
          answerTR: "drakula",
          answerEN: "dracula",
          answerES: "dracula",
          answerDE: "dracula",
        },
        {
          emojis: "🕷️ 🧑‍🔬 🧪",
          answerTR: "spiderman",
          answerEN: "spiderman",
          answerES: "hombrearaña",
          answerDE: "spiderman",
        },
        {
          emojis: "🚀 🌌 👨‍🚀",
          answerTR: "uzaymacera",
          answerEN: "spaceadventure",
          answerES: "aventuraespacial",
          answerDE: "weltraumabenteuer",
        },
        {
          emojis: "🦄 🌈 ✨",
          answerTR: "sihirlialem",
          answerEN: "magicalrealm",
          answerES: "realmagico",
          answerDE: "magischewelt",
        },
        {
          emojis: "🏴‍☠️ 🗺️ 💰",
          answerTR: "korsanhazinesi",
          answerEN: "piratetreasure",
          answerES: "tesorodelpirata",
          answerDE: "piratenschatz",
        },
        {
          emojis: "🧟‍♂️ 🏙️ 🌙",
          answerTR: "zombisehir",
          answerEN: "zombietown",
          answerES: "ciudadzombie",
          answerDE: "zombiestadt",
        },
        {
          emojis: "🧚‍♀️ 🌳 🌸",
          answerTR: "periorman",
          answerEN: "fairyforest",
          answerES: "bosquehada",
          answerDE: "feenwald",
        },
        {
          emojis: "🐉 🔥 🏰",
          answerTR: "ejderhasirketi",
          answerEN: "dragonscastle",
          answerES: "castillodeldragon",
          answerDE: "drachenburg",
        }
      ];

      return new Response(JSON.stringify(emojiGameExamples),{
        status: 200,
        headers: {"Content-Type" : "application/json"}
      })
}