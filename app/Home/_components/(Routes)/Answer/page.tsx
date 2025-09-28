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
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [currentAnswer, setCurrentAnswer] = useState<Emojies | null>(null);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);

  // Türkiye saatini almak için helper
  const getTRDate = () => {
    const now = new Date();
    return new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/Istanbul" })
    );
  };

  const todayKey = () => {
    const d = getTRDate();
    return d.toISOString().split("T")[0]; // YYYY-MM-DD formatında
  };

  // localStorage reset kontrol
  const checkAndResetLocalStorage = () => {
    const savedDate = window.localStorage.getItem("savedDate");

    if (savedDate !== todayKey()) {
      window.localStorage.clear();
      window.localStorage.setItem("savedDate", todayKey());
      setUserAnswer("");
      setIsAnswer(false);
      setWrongAnswerCount(0);
    }
  };

  // Component mount olduğunda çalışır
  useEffect(() => {
    checkAndResetLocalStorage();

    // Her dakika kontrol et
    const interval = setInterval(checkAndResetLocalStorage, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    fetchCurrentAnswer();
    const interval = setInterval(fetchCurrentAnswer, 10000);
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
            <Button
              type="button"
              variant="outline"
              onClick={handleSubmit}
              className="text-2xl"
            >
              👍
            </Button>
          </div>
        )
      ) : (
        <p className="text-green-500 text-3xl">
          😄 {currentAnswer?.answerEN} 😄
        </p>
      )}
    </div>
  );
};

export default AnswerPage;
