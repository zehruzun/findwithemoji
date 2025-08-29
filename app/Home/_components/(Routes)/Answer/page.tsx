// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { gAnswer, gIsCorrect, gWrongAnswerCount } from "@/global/global";

// interface Emojies {
//   id: string;
//   answerTR: string;
//   answerEN: string;
//   answerSP: string;
//   answerDU: string;
//   startTime: string;
//   endTime: string;
// }

// const AnswerPage = () => {
//   const [userAnswer, setUserAnswer] = useState<string>(gAnswer.get());
//   const [answer, setAnswer] = useState<Emojies[]>([]);
//   const [currentAnswer, setCurrentAnswer] = useState<Emojies | null>(null);
//   const [isAnswer, setIsAnswer] = useState<boolean>(gIsCorrect.get());
//   const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(
//     gWrongAnswerCount.get()
//   );

//   // Emoji verilerini yükle
//   const fetchEmojies = () => {
//     fetch("/api/emojies")
//       .then((res) => res.json())
//       .then((data) => setAnswer(data))
//       .catch((err) => console.error("Emojiler yüklenirken hata:", err));
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

//   useEffect(() => {
//     if (answer.length > 0) {
//       checkCurrentAnswer(); // ilk kontrol
//       const interval = setInterval(checkCurrentAnswer, 1000 * 30); // her 30 saniye kontrol
//       return () => clearInterval(interval);
//     }
//   }, [answer, checkCurrentAnswer]);

//   useEffect(() => {
//     gWrongAnswerCount.set(wrongAnswerCount);
//   }, [wrongAnswerCount]);

//   useEffect(() => {
//     gAnswer.set(userAnswer);
//   }, [userAnswer]);

//   useEffect(() => {
//     gIsCorrect.set(isAnswer);
//   }, [isAnswer]);

//   const handleSubmit = () => {
//     // Kullanıcının cevabını normalize et
//     const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s+/g, "");
  
//     // Doğru cevapları normalize et ve null/undefined olanları çıkar
//     const normalizedAnswers = [
//       currentAnswer?.answerTR ?? "",
//       currentAnswer?.answerSP ?? "",
//       currentAnswer?.answerEN ?? "",
//       currentAnswer?.answerDU ?? "",
//     ].map(ans => ans.toLowerCase().replace(/\s+/g, ""));
  
//     // Kullanıcının cevabı doğru mu kontrol et
//     const isCorrect = normalizedAnswers.includes(normalizedUserAnswer);
  
//     if (isCorrect) {
//       setIsAnswer(true);
//     } else {
//       setIsAnswer(false);
  
//       if (wrongAnswerCount >= 4) {
//         // Oyun bitti
//         console.log("Oyun bitti!");
//       } else {
//         setWrongAnswerCount(prev => prev + 1);
//       }
//     }
//   };



//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") handleSubmit();
//   };

//   return (
//     <div>
//       {!isAnswer ? (
//         wrongAnswerCount >= 4 ? (
//           <p className="text-red-500 text-3xl ">😔 {currentAnswer?.answerEN} 😔</p>
//         ) : (
//           <div className="flex w-full max-w-sm items-center gap-2">
//             <Input
//               type="text"
//               placeholder="..."
//               value={userAnswer}
//               onKeyDown={handleKeyDown}
//               onChange={(e) => setUserAnswer(e.target.value)}
//             />
//             <Button type="button" variant="outline" onClick={handleSubmit} className="text-2xl">
//               👍
//             </Button>
//           </div>
//         )
//       ) : (
//         <p className="text-green-500 text-3xl ">😄 {currentAnswer?.answerEN} 😄</p>
//       )}
//     </div>
//   );
// };

// export default AnswerPage;


// "use client";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// interface Emojies {
//   id: string;
//   answerTR: string;
//   answerEN: string;
//   answerSP: string;
//   answerDU: string;
//   startTime: string;
//   endTime: string;
// }

// const AnswerPage = () => {
//   // Sayfa yüklendiğinde localStorage’dan oku
//   const [userAnswer, setUserAnswer] = useState<string>(
//     () => window.localStorage.getItem("userAnswer") || ""
//   );
//   const [answer, setAnswer] = useState<Emojies[]>([]);
//   const [currentAnswer, setCurrentAnswer] = useState<Emojies | null>(null);
//   const [isAnswer, setIsAnswer] = useState<boolean>(
//     () => window.localStorage.getItem("isAnswer") === "true"
//   );
//   const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(
//     () => parseInt(window.localStorage.getItem("wrongAnswerCount") || "0")
//   );

//   // Emoji verilerini yükle
//   useEffect(() => {
//     fetch("/api/emojies")
//       .then((res) => res.json())
//       .then((data) => {
//         setAnswer(data);

//         // Şu anki zamanı kontrol ederek aktif olan cevabı bul
//         const now = new Date();
//         const active = data.find((e: Emojies) => {
//           const start = new Date(e.startTime);
//           const end = new Date(e.endTime);
//           return now >= start && now <= end;
//         });
//         setCurrentAnswer(active || null);

//         // Eğer süresi geçmişse localStorage'ı temizle
//         if (!active) {
//           window.localStorage.removeItem("userAnswer");
//           window.localStorage.removeItem("isAnswer");
//           window.localStorage.removeItem("wrongAnswerCount");
//           setUserAnswer("");
//           setIsAnswer(false);
//           setWrongAnswerCount(0);
//         }
//       })
//       .catch((err) => console.error("Emojiler yüklenirken hata:", err));
//   }, []);

//   // State değişince localStorage'a kaydet
//   useEffect(() => {
//     window.localStorage.setItem("wrongAnswerCount", wrongAnswerCount.toString());
//   }, [wrongAnswerCount]);

//   useEffect(() => {
//     window.localStorage.setItem("userAnswer", userAnswer);
//   }, [userAnswer]);

//   useEffect(() => {
//     window.localStorage.setItem("isAnswer", isAnswer.toString());
//   }, [isAnswer]);

//   const handleSubmit = () => {
//     const now = new Date();

//     if (!currentAnswer) {
//       alert("Şu anda aktif bir emoji yok veya süresi dolmuş.");
//       return;
//     }

//     // Cevabın girildiği zamanı kaydet
//     window.localStorage.setItem("answerTime", now.toISOString());

//     // StartTime / EndTime kontrolü
//     const start = new Date(currentAnswer.startTime);
//     const end = new Date(currentAnswer.endTime);

//     if (now < start || now > end) {
//       alert("Cevap geçersiz, süresi dolmuş!");
//       // LocalStorage ve state temizle
//       window.localStorage.removeItem("userAnswer");
//       window.localStorage.removeItem("isAnswer");
//       window.localStorage.removeItem("wrongAnswerCount");
//       setUserAnswer("");
//       setIsAnswer(false);
//       setWrongAnswerCount(0);
//       return;
//     }

//     // Kullanıcının cevabını normalize et
//     const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s+/g, "");
//     const normalizedAnswers = [
//       currentAnswer.answerTR,
//       currentAnswer.answerSP,
//       currentAnswer.answerEN,
//       currentAnswer.answerDU,
//     ].map(ans => ans.toLowerCase().replace(/\s+/g, ""));

//     const isCorrect = normalizedAnswers.includes(normalizedUserAnswer);

//     if (isCorrect) {
//       setIsAnswer(true);
//     } else {
//       setIsAnswer(false);
//       if (wrongAnswerCount >= 4) {
//         console.log("Oyun bitti!");
//       } else {
//         setWrongAnswerCount(prev => prev + 1);
//       }
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") handleSubmit();
//   };

//   return (
//     <div>
//       {!isAnswer ? (
//         wrongAnswerCount >= 4 ? (
//           <p className="text-red-500 text-3xl ">😔 {currentAnswer?.answerEN} 😔</p>
//         ) : (
//           <div className="flex w-full max-w-sm items-center gap-2">
//             <Input
//               type="text"
//               placeholder="..."
//               value={userAnswer}
//               onKeyDown={handleKeyDown}
//               onChange={(e) => setUserAnswer(e.target.value)}
//             />
//             <Button type="button" variant="outline" onClick={handleSubmit} className="text-2xl">
//               👍
//             </Button>
//           </div>
//         )
//       ) : (
//         <p className="text-green-500 text-3xl ">😄 {currentAnswer?.answerEN} 😄</p>
//       )}
//     </div>
//   );
// };

// export default AnswerPage;



"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Emojies {
  id: string;
  answerTR: string;
  answerEN: string;
  answerSP: string;
  answerDU: string;
  startTime: string;
  endTime: string;
}

const AnswerPage = () => {
  // Client-side state
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [currentAnswer, setCurrentAnswer] = useState<Emojies | null>(null);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);

  // localStorage’dan başlangıç değerlerini yükle
  useEffect(() => {
    const savedAnswer = window.localStorage.getItem("userAnswer");
    const savedIsAnswer = window.localStorage.getItem("isAnswer");
    const savedWrongCount = window.localStorage.getItem("wrongAnswerCount");

    if (savedAnswer) setUserAnswer(savedAnswer);
    if (savedIsAnswer === "true") setIsAnswer(true);
    if (savedWrongCount) setWrongAnswerCount(parseInt(savedWrongCount));
  }, []);

  // Emoji verilerini fetch et ve aktif olanı belirle
  const fetchCurrentAnswer = async () => {
    try {
      const res = await fetch("/api/emojies");
      const data: Emojies[] = await res.json();
      const now = new Date();
      const active = data.find((e) => {
        const start = new Date(e.startTime);
        const end = new Date(e.endTime);
        return now >= start && now <= end;
      });
      setCurrentAnswer(active || null);

      if (!active) {
        // Süresi geçmişse localStorage temizle
        window.localStorage.removeItem("userAnswer");
        window.localStorage.removeItem("isAnswer");
        window.localStorage.removeItem("wrongAnswerCount");
        setUserAnswer("");
        setIsAnswer(false);
        setWrongAnswerCount(0);
      }
    } catch (err) {
      console.error("Emojiler yüklenirken hata:", err);
    }
  };

  // İlk fetch ve her 10 saniyede bir güncelle
  useEffect(() => {
    fetchCurrentAnswer();
    const interval = setInterval(fetchCurrentAnswer, 10000); // 10 saniye
    return () => clearInterval(interval);
  }, []);

  // State değişikliklerini localStorage’a kaydet
  useEffect(() => {
    window.localStorage.setItem("userAnswer", userAnswer);
  }, [userAnswer]);

  useEffect(() => {
    window.localStorage.setItem("isAnswer", isAnswer.toString());
  }, [isAnswer]);

  useEffect(() => {
    window.localStorage.setItem("wrongAnswerCount", wrongAnswerCount.toString());
  }, [wrongAnswerCount]);

  // Cevap gönderme
  const handleSubmit = () => {
    if (!currentAnswer) {
      alert("Şu anda aktif bir emoji yok veya süresi dolmuş.");
      return;
    }

    const now = new Date();
    const start = new Date(currentAnswer.startTime);
    const end = new Date(currentAnswer.endTime);

    if (now < start || now > end) {
      alert("Cevap geçersiz, süresi dolmuş!");
      window.localStorage.removeItem("userAnswer");
      window.localStorage.removeItem("isAnswer");
      window.localStorage.removeItem("wrongAnswerCount");
      setUserAnswer("");
      setIsAnswer(false);
      setWrongAnswerCount(0);
      return;
    }

    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s+/g, "");
    const normalizedAnswers = [
      currentAnswer.answerTR,
      currentAnswer.answerSP,
      currentAnswer.answerEN,
      currentAnswer.answerDU,
    ].map((ans) => ans.toLowerCase().replace(/\s+/g, ""));

    const correct = normalizedAnswers.includes(normalizedUserAnswer);

    if (correct) {
      setIsAnswer(true);
    } else {
      setIsAnswer(false);
      setWrongAnswerCount((prev) => Math.min(prev + 1, 4));
      if (wrongAnswerCount >= 3) {
        console.log("Oyun bitti!");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!isAnswer ? (
        wrongAnswerCount >= 4 ? (
          <p className="text-red-500 text-3xl">😔 {currentAnswer?.answerEN} 😔</p>
        ) : (
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="text"
              placeholder="..."
              value={userAnswer}
              onKeyDown={handleKeyDown}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button type="button" variant="outline" onClick={handleSubmit} className="text-2xl">
              👍
            </Button>
          </div>
        )
      ) : (
        <p className="text-green-500 text-3xl">😄 {currentAnswer?.answerEN} 😄</p>
      )}
    </div>
  );
};

export default AnswerPage;

