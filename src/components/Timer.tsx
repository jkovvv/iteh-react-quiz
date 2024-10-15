import React, { useEffect, useState} from 'react';

type TimerProps = {
  duration: number; // u sekundama*100
  onTimeUp: () => void;
};

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 4);
        }, 40);

        return () => clearTimeout(timerId);
    }, [timeLeft, onTimeUp]);

  return (
    <div className="timer">
      <span>Time Left: {Math.floor(timeLeft/100)}.{timeLeft%100}s</span>
    </div>
  );
};

export default Timer;
