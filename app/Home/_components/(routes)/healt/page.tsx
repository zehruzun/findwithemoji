"use client"
import { gWrongAnswerCount } from "@/global/global";
import React, { useEffect, useState } from "react";

const HealtPage = () => {
    const [count, setCount] = useState(gWrongAnswerCount.get());

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(gWrongAnswerCount.get());
      }, 100);
  
      return () => clearInterval(interval);
    }, []);


    const hearts = Array.from({ length: 4 }, (_, index) => {
        if (index < count) {
          return <span key={index} className="text-4xl mx-1">💔</span>;
        } else {
          return <span key={index} className="text-4xl mx-1">❤️</span>;
        }
      });
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <div className="flex">{hearts}</div>
      </div>
    </div>
  );
};

export default HealtPage;
