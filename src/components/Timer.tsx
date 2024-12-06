import React, { useState, useEffect } from "react";
import "./timer.css";

interface TimerProps {
  onTimerEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(90);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onTimerEnd();
      setTimeLeft(90);
    }
  }, [timeLeft, onTimerEnd]);

  return <div className="timer">Time left: {timeLeft}s</div>;
};

export default Timer;
