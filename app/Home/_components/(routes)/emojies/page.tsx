"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

interface Emojies {
  id: string;
  emoji: string;
  startTime: string; // ISO format string
  endTime: string; // ISO format string
}

const EmojiesPage = () => {
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

  useEffect(() => {
    fetchEmojies();
  }, []);

  const checkCurrentEmoji = useCallback(() => {
    const now = new Date();

    const found = emojies.find((e) => {
      const start = new Date(e.startTime);
      const end = new Date(e.endTime);
      return now >= start && now <= end;


    });
    // console.log("found emoji: ",found)

    setCurrentEmoji(found || null);
  }, [emojies]);


  useEffect(() => {
    fetchEmojies();
  }, []);
  
  useEffect(() => {
    if (emojies.length > 0) {
      checkCurrentEmoji(); // ilk kontrol
      const interval = setInterval(checkCurrentEmoji, 100 * 30); // her 30 saniye kontrol
      // console.log("running")
      return () => clearInterval(interval);
    }
  }, [emojies, checkCurrentEmoji]);

  // console.log("emojies: " , emojies)
  // console.log("time: " , currentEmoji?.emoji)

  return <div>
    <div className="flex items-center justify-center w-full">
      {currentEmoji ? (
        <p key={currentEmoji.id} className="text-base sm:text-6xl text-center">
          {currentEmoji.emoji}
        </p>
      ) : (
        <p className="text-base sm:text-xl text-center text-gray-500">

        </p>
      )}
    </div>
  </div>;
};

export default EmojiesPage;
