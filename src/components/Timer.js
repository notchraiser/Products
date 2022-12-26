import { useState, useRef } from "react";

const Timer = () => {
  const [seconds, SetSeconds] = useState(0);
  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      SetSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    SetSeconds(0);
  };

  return (
    <div className="flex-row flex-end">
        <button
          type="button"
          name="save"
          className="button"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          type="button"
          name="save"
          className="button"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          type="button"
          name="save"
          className="button"
          onClick={resetTimer}
        >
          Reset
        </button>
        <p>Seconds: {seconds}</p>
    </div>
  );
};

export default Timer;
