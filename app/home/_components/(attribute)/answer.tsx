"use client";
import React, { useEffect, useState } from "react";
import { gAnswerText, gWrongAnswerCount } from "../../../../global/global";
import Keyboard from "./keyboard";

interface Emojies {
  id: string;
  answerTR: string;
  answerEN: string;
  answerSP: string;
  answerDU: string;
  startTime: string;
  endTime: string;
}

const MAX_WRONG = 4;

const AnswerPage = () => {
  const [valueAnswer, setValueAnswer] = useState(""); // input için doğru cevabı tutar
  const [_, setValueWrongAnswer] = useState(0);
  const [emojies, setEmojies] = useState<Emojies[]>([]);
  const [currentEmoji, setCurrentEmoji] = useState<Emojies | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Sayfa açıldığında cookie’den kontrol et
  useEffect(() => {
    async function loadCookie() {
      try {
        // doğru cevabı yükle
        const res = await fetch("/api/cookie/get?name=userAnswer");
        const data = await res.json();
        if (data.value) {
          setValueAnswer(data.value);
          gAnswerText.set(data.value);
          setIsCorrect(true);
          console.log("Cookie’den yüklenen doğru cevap:", data.value);
        }

        // yanlış cevap sayısını yükle
        const wrongRes = await fetch("/api/cookie/get?name=wrongAnswers");
        const wrongData = await wrongRes.json();
        const initialWrong = parseInt(wrongData.value ?? "0", 10);
        setValueWrongAnswer(initialWrong);
        gWrongAnswerCount.set(initialWrong);

        if (initialWrong >= MAX_WRONG) setIsGameOver(true);

        console.log("Başlangıçtaki yanlış cevap sayısı:", initialWrong);
      } catch (err) {
        console.log("Cookie yüklenirken hata:", err);
      }
    }
    loadCookie();
  }, []);

  const fetchEmojies = async () => {
    try {
      const res = await fetch("/api/emojies");
      const data = await res.json();
      setEmojies(data);
      console.log("Emojiler yüklendi:", data);
    } catch (err) {
      console.log("Emojiler yüklenirken hata:", err);
    }
  };

  useEffect(() => {
    fetchEmojies();
  }, []);

  // Start & end time kontrolü ve cookie yönetimi
  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date();

      // O an geçerli emoji var mı?
      const current = emojies.find((e) => {
        const start = new Date(e.startTime);
        const end = new Date(e.endTime);
        return now >= start && now <= end;
      });

      if (current) {
        if (currentEmoji?.id !== current.id) {
          // Yeni geçerli emoji geldi
          console.log("Geçerli emoji değişti:", current);
          setCurrentEmoji(current);
          setValueAnswer(current.answerTR); // input’a geçerli cevabı at
          gAnswerText.set(current.answerTR);
          setIsCorrect(false);
        }
      } else {
        if (currentEmoji) {
          console.log("Artık geçerli emoji yok, cookie siliniyor");
          setCurrentEmoji(null);
          setValueAnswer("");
          gAnswerText.set("");
          try {
            await fetch("/api/cookie/remove?name=userAnswer");
            console.log("Cookie başarıyla silindi");
          } catch (err) {
            console.log("Cookie silinirken hata:", err);
          }
        }
      }
    }, 1000 * 30); // 30 saniyede bir kontrol

    return () => clearInterval(interval);
  }, [emojies, currentEmoji]);

  const handleChange = (val: string) => {
    setValueAnswer(val);
    gAnswerText.set(val);
  };

  const handleSubmit = async () => {
    if (isCorrect || isGameOver || !currentEmoji) return;

    const userAnswer = gAnswerText.get().toLowerCase().replace(/\s+/g, "");
    const correctAnswer = currentEmoji.answerTR.toLowerCase().replace(/\s+/g, "");

    if (userAnswer === correctAnswer) {
      console.log("✅ Cevap doğru");
      setIsCorrect(true);

      try {
        await fetch("/api/cookie/set", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: "userAnswer", value: userAnswer }),
        });
        console.log("Doğru cevap cookie’si kaydedildi:", userAnswer);
        setValueAnswer(userAnswer);
      } catch (err) {
        console.log("Cookie kaydedilirken hata:", err);
      }
    } else {
      console.log("❌ Cevap yanlış");

      try {
        const res = await fetch("/api/cookie/get?name=wrongAnswers");
        const data = await res.json();
        const current = parseInt(data.value ?? "0", 10);
        const newValue = current + 1;

        await fetch("/api/cookie/set", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: "wrongAnswers", value: newValue.toString() }),
        });

        setValueWrongAnswer(newValue);
        gWrongAnswerCount.set(newValue);

        if (newValue >= MAX_WRONG) setIsGameOver(true);

        console.log("Yanlış cevap sayısı artırıldı:", newValue);
      } catch (err) {
        console.log("Yanlış cevap cookie’si güncellenirken hata:", err);
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        {isGameOver ? (
          <p className="text-center text-2xl sm:text-3xl font-bold text-red-600">
            Maalesef {MAX_WRONG} yanlış yaptınız!
          </p>
        ) : isCorrect ? (
          <p className="text-center text-2xl sm:text-3xl font-bold text-green-600">
            Tebrikler! Doğru cevap: {valueAnswer}
          </p>
        ) : (
          <input
            type="text"
            placeholder="Yazınız..."
            className="border rounded px-3 sm:px-4 py-2 w-full sm:w-2/3 text-center text-sm sm:text-base"
            value={valueAnswer}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
      </div>
      <br />
      <br />
      {!isCorrect && !isGameOver && (
        <Keyboard value={valueAnswer} onChange={handleChange} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default AnswerPage;
