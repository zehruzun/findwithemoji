// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { gAnswer, gIsCorrect, gWrongAnswerCount } from "@/global/global";

// interface Emojies {
//   id: string;
//   answerTR: string;
//   startTime: string;
//   endTime: string;
// }

// const AnswerPage = () => {
//   const [userAnswer, setUserAnswer] = useState<string>("");
//   const [answer, setAnswer] = useState<Emojies[]>([]);
//   const [currentAnswer, setCurrentAnswer] = useState<Emojies | null>(null);
//   const [isAnswer, setIsAnswer] = useState<boolean>(false);
//   const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);

//   const fetchEmojies = () => {
//     fetch("/api/emojies")
//       .then((res) => res.json())
//       .then((data) => {
//         setAnswer(data);
//       })
//       .catch((err) => {
//         console.error("Emojiler yüklenirken hata:", err);
//       });
//   };

//   useEffect(() => {
//     fetchEmojies();
//   }, []);

//   const checkCurrentAnswer = useCallback(() => {
//     const now = new Date();

//     const found = answer.find((e) => {
//       const start = new Date(e.startTime);
//       const end = new Date(e.endTime);
//       return now >= start && now <= end;
//     });

//     setCurrentAnswer(found || null);
//   }, [answer]);
//   gWrongAnswerCount.set(wrongAnswerCount);
//   gAnswer.set(userAnswer)
//   gIsCorrect.set(isAnswer)

//   useEffect(() => {
//     if (answer.length > 0) {
//       checkCurrentAnswer(); // ilk kontrol
//       const interval = setInterval(checkCurrentAnswer, 100 * 30); // her 30 saniye kontrol
//       return () => clearInterval(interval);
//     }
//   }, [answer, checkCurrentAnswer]);

//   const handleSubmit = () => {
//     // console.log("Kullanıcı cevabı:", userAnswer);
//     // console.log("Doğru cevap", currentAnswer?.answerTR);
//     if (
//       currentAnswer?.answerTR.toLowerCase().replace(/\s+/g, "") ===
//       userAnswer.toLowerCase().replace(/\s+/g, "")
//     ) {
//       setIsAnswer(true);
//       // console.log("true");
//     } else {
//       setIsAnswer(false);
//       gWrongAnswerCount
//       // console.log("false");
//       if (wrongAnswerCount == 4) {
//         // console.log("game over");
//       } else {
//         // console.log("wrong: ", wrongAnswerCount);
//         // console.log("global: " ,gWrongAnswerCount.get());
//         setWrongAnswerCount((prev) => prev + 1);


//       }
//     }
//   };
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleSubmit();
//     }
//   };

//   return (
//     <div>
//       {!isAnswer ? (
//         wrongAnswerCount >= 4 ? (
//           <p>Maalesef hakkınız bitti!</p>
//         ) : (
//           <div className="flex w-full max-w-sm items-center gap-2">
//           <Input
//             type="text"
//             placeholder="..."
//             value={userAnswer}
//             onKeyDown={handleKeyDown}
//             onChange={(e) => setUserAnswer(e.target.value)}
//           />
//           <Button type="button" variant="outline" onClick={handleSubmit}>
//             ENTER
//           </Button>
//         </div>
//         )
//       ) : (
//         <p>Doğru cevapladınız! 🎉</p>

//       )}
//     </div>
//   );
// };

// export default AnswerPage;


"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gAnswer, gIsCorrect, gWrongAnswerCount } from "@/global/global";

interface Emojies {
  id: string;
  answerTR: string;
  startTime: string;
  endTime: string;
}

const AnswerPage = () => {
  const [userAnswer, setUserAnswer] = useState<string>(gAnswer.get());
  const [answer, setAnswer] = useState<Emojies[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<Emojies | null>(null);
  const [isAnswer, setIsAnswer] = useState<boolean>(gIsCorrect.get());
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(
    gWrongAnswerCount.get()
  );

  // Emoji verilerini yükle
  const fetchEmojies = () => {
    fetch("/api/emojies")
      .then((res) => res.json())
      .then((data) => setAnswer(data))
      .catch((err) => console.error("Emojiler yüklenirken hata:", err));
  };

  useEffect(() => {
    fetchEmojies();
  }, []);

  const checkCurrentAnswer = useCallback(() => {
    const now = new Date();
    const found = answer.find((e) => {
      const start = new Date(e.startTime);
      const end = new Date(e.endTime);
      return now >= start && now <= end;
    });
    setCurrentAnswer(found || null);
  }, [answer]);

  useEffect(() => {
    if (answer.length > 0) {
      checkCurrentAnswer(); // ilk kontrol
      const interval = setInterval(checkCurrentAnswer, 1000 * 30); // her 30 saniye kontrol
      return () => clearInterval(interval);
    }
  }, [answer, checkCurrentAnswer]);

  // ✅ Global state ve cookie’ye yansıtma
  useEffect(() => {
    gWrongAnswerCount.set(wrongAnswerCount);
  }, [wrongAnswerCount]);

  useEffect(() => {
    gAnswer.set(userAnswer);
  }, [userAnswer]);

  useEffect(() => {
    gIsCorrect.set(isAnswer);
  }, [isAnswer]);

  const handleSubmit = () => {
    if (
      currentAnswer?.answerTR.toLowerCase().replace(/\s+/g, "") ===
      userAnswer.toLowerCase().replace(/\s+/g, "")
    ) {
      setIsAnswer(true);
    } else {
      setIsAnswer(false);
      if (wrongAnswerCount >= 4) {
        // oyun bitti
      } else {
        setWrongAnswerCount((prev) => prev + 1);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div>
      {!isAnswer ? (
        wrongAnswerCount >= 4 ? (
          <p>Maalesef hakkınız bitti!</p>
        ) : (
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="text"
              placeholder="..."
              value={userAnswer}
              onKeyDown={handleKeyDown}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button type="button" variant="outline" onClick={handleSubmit}>
              ENTER
            </Button>
          </div>
        )
      ) : (
        <p>Doğru cevapladınız! 🎉</p>
      )}
    </div>
  );
};

export default AnswerPage;
