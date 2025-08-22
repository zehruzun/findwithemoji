// "use client";
// import React, { useEffect, useState } from "react";
// interface Emojies {
//   id: string;
//   emoji: string;
//   startTime: string;
//   endTime: string
// }
// const QuestionPage = () => {
//   const [emojies, setEmojies] = useState<Emojies[]>([]);

//   const fetchEmojies = () => {
//     let url = "/api/emojies";
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setEmojies(data);
//       })
//       .catch((err) => {
//         (err);
//       });
//   };

//   useEffect(() => {
//     fetchEmojies();
//   }, []);

//   return (
//     <div className="flex items-center justify-center w-full">
//       {emojies[0]?.emoji && (
//         <p key={emojies[0].id} className="text-base sm:text-6xl text-center">
//           {emojies[0].emoji.toLowerCase().replace(/\s+/g, "")}
//         </p>
//       )}
//     </div>
//   );
// };

// export default QuestionPage;


// "use client";
// import React, { useEffect, useState } from "react";

// interface Emojies {
//   id: string;
//   emoji: string;
//   startTime: string; // ISO format string
//   endTime: string;   // ISO format string
// }

// const QuestionPage = () => {
//   const [emojies, setEmojies] = useState<Emojies[]>([]);
//   const [currentEmoji, setCurrentEmoji] = useState<Emojies | null>(null);

//   const fetchEmojies = () => {
//     fetch("/api/emojies")
//       .then((res) => res.json())
//       .then((data) => {
//         setEmojies(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   // Şu anki saati kontrol eden fonksiyon
//   const checkCurrentEmoji = () => {
//     const now = new Date(); // bilgisayarın anlık zamanı

//     // Her emoji için kalan süreyi hesapla ve  ile yaz
//     emojies.forEach((e) => {
//       const start = new Date(e.startTime);
//       const diffMs = start.getTime() - now.getTime();
//       const diffSec = Math.floor(diffMs / 1000);

//       (
//         `⏰ Şu an: ${now.toLocaleTimeString()} | Emoji: ${
//           e.emoji
//         } | Başlangıç: ${start.toLocaleTimeString()} | Kalan: ${
//           diffSec > 0 ? diffSec + " sn" : "Başladı veya geçti"
//         }`
//       );
//     });

//     // Şu an gösterilecek emoji var mı?
//     const found = emojies.find((e) => {
//       const start = new Date(e.startTime);
//       const end = new Date(e.endTime);
//       return now >= start && now <= end;
//     });
//     setCurrentEmoji(found || null);
//   };

//   useEffect(() => {
//     fetchEmojies();
//   }, []);

//   useEffect(() => {
//     if (emojies.length > 0) {
//       checkCurrentEmoji(); // ilk kontrol
//       const interval = setInterval(checkCurrentEmoji, 1000 * 30); // her 30 sn bir kontrol
//       return () => clearInterval(interval);
//     }
//   }, [emojies]);

//   return (
//     <div className="flex items-center justify-center w-full">
//       {currentEmoji ? (
//         <p key={currentEmoji.id} className="text-base sm:text-6xl text-center">
//           {currentEmoji.emoji}
//         </p>
//       ) : (
//         <p className="text-base sm:text-xl text-center text-gray-500">
//           Şu an gösterilecek emoji yok
//         </p>
//       )}
//     </div>
//   );
// };

// export default QuestionPage;


"use client";
import React, { useEffect, useState, useCallback } from "react";

interface Emojies {
  id: string;
  emoji: string;
  startTime: string; // ISO format string
  endTime: string;   // ISO format string
}

const QuestionPage = () => {
  const [emojies, setEmojies] = useState<Emojies[]>([]);
  const [currentEmoji, setCurrentEmoji] = useState<Emojies | null>(null);

  const fetchEmojies = () => {
    fetch("/api/emojies")
      .then((res) => res.json())
      .then((data) => {
        setEmojies(data);
      })
      .catch((err) => {
        console.error("Emojiler yüklenirken hata:", err);
      });
  };

  const checkCurrentEmoji = useCallback(() => {
    const now = new Date();

    emojies.forEach((e) => {
      const start = new Date(e.startTime);
      const diffMs = start.getTime() - now.getTime();
      const diffSec = Math.floor(diffMs / 1000);

      // ESLint uyarısı için console.log kullanıldı
      console.log(
        `⏰ Şu an: ${now.toLocaleTimeString()} | Emoji: ${e.emoji} | Başlangıç: ${start.toLocaleTimeString()} | Kalan: ${
          diffSec > 0 ? diffSec + " sn" : "Başladı veya geçti"
        }`
      );
    });

    const found = emojies.find((e) => {
      const start = new Date(e.startTime);
      const end = new Date(e.endTime);
      return now >= start && now <= end;
    });

    setCurrentEmoji(found || null);
  }, [emojies]);

  useEffect(() => {
    fetchEmojies();
  }, []);

  useEffect(() => {
    if (emojies.length > 0) {
      checkCurrentEmoji(); // ilk kontrol
      const interval = setInterval(checkCurrentEmoji, 1000 * 30); // her 30 saniye kontrol
      return () => clearInterval(interval);
    }
  }, [emojies, checkCurrentEmoji]);

  return (
    <div className="flex items-center justify-center w-full">
      {currentEmoji ? (
        <p key={currentEmoji.id} className="text-base sm:text-6xl text-center">
          {currentEmoji.emoji}
        </p>
      ) : (
        <p className="text-base sm:text-xl text-center text-gray-500">
          Şu an gösterilecek emoji yok
        </p>
      )}
    </div>
  );
};

export default QuestionPage;
