"use client"
import { useEffect, useState } from "react";

const TimePage = () => {
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number }>({
    h: 0,
    m: 0,
    s: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let h = 23 - date.getHours();
      let m = 59 - date.getMinutes();
      let s = 59 - date.getSeconds();

      // Dakika sıfırlandığında saati ayarlıyoruz
      if (s < 0) {
        s = 59;
        m = m - 1;
      }
      if (m < 0) {
        m = 59;
        h = h - 1;
      }

      setTimeLeft({ h, m, s });
    };

    updateTime(); // component mount olduğunda ilk değer
    const interval = setInterval(updateTime, 1000); // her saniye güncelle
    return () => clearInterval(interval);
  }, []);

  const hours = timeLeft.h.toString().padStart(2, "0");
  const minutes = timeLeft.m.toString().padStart(2, "0");
  const seconds = timeLeft.s.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center h-1/10 w-full">
      <span className="text-3xl font-bold">
        {hours} : {minutes} : {seconds}
      </span>
    </div>
  );
};

export default TimePage;
