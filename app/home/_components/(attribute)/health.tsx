import React, { useEffect, useState } from "react";
import { gWrongAnswerCount } from "../../../../global/global";

const MAX_HEARTS = 4;

const HealthPage = () => {
  const [wrongCount, setWrongCount] = useState(gWrongAnswerCount.get());

  useEffect(() => {
    const unsubscribe = gWrongAnswerCount.subscribe((val) => {
      setWrongCount(val);
    });
    return () => unsubscribe();
  }, []);

  // Kalp ikonlarını oluştur
  const hearts = Array.from({ length: MAX_HEARTS }, (_, index) => {
    if (index < wrongCount) {
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

export default HealthPage;
