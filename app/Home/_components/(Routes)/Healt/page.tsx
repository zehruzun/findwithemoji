"use client";
import React, { useEffect, useState } from "react";

const HealtPage = () => {
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);

  // İlk yüklemede localStorage’dan oku ve 10 saniyede bir güncelle
  useEffect(() => {
    const updateCount = () => {
      const latest = window.localStorage.getItem("wrongAnswerCount");
      setWrongAnswerCount(latest ? parseInt(latest) : 0);
    };

    updateCount(); // ilk yüklemede hemen çalıştır

    const interval = setInterval(updateCount, 1000); // her 10 saniye güncelle

    return () => clearInterval(interval); // unmount olunca temizle
  }, []);

  const hearts = Array.from({ length: 4 }, (_, index) =>
    index < wrongAnswerCount
      ? <span key={index} className="text-4xl mx-1">💔</span>
      : <span key={index} className="text-4xl mx-1">❤️</span>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex">{hearts}</div>
    </div>
  );
};

export default HealtPage;
