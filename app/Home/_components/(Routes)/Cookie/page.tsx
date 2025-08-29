"use client";

import { gAnswer, gIsCorrect, gWrongAnswerCount } from "@/global/global";
import React, { useEffect, useState } from "react";

const CookiePage = () => {
  const [cookieContent, setCookieContent] = useState("");

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/cookie", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cookieAnswer: gAnswer.get(),
            cookieIsCorrect: gIsCorrect.get(),
            cookieWrongCount: gWrongAnswerCount.get(),
          }),
        });

        await res.json();

        setCookieContent(document.cookie);
      } catch (err) {
        console.error("Login error:", err);
      }
    }, 1000); // her 1 saniyede bir çalışır

    return () => clearInterval(interval); // component unmount olunca temizle
  }, []);

  return <div>Cookie İçeriği: {cookieContent}</div>;
};

export default CookiePage;
