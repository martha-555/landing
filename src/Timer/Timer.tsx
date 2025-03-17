/** @format */

import React, { useState, useEffect } from "react";
import classes from "./styles.module.css";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer: React.FC = () => {
  const targetTime =
    new Date().getTime() + 14 * 60 * 60 * 1000 + 55 * 60 * 1000 + 15 * 1000;

  const [timeLeft, setTimeLeft] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeRemaining = targetTime - currentTime;

      if (timeRemaining <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Час до кінця акції</h2>
      <div className={classes.timeContainer}>
        <div className={classes.time}>
          {String(timeLeft.hours).padStart(2, "0")} годин
        </div>
        <div className={classes.time}>
          {String(timeLeft.minutes).padStart(2, "0")} хвилин
        </div>
        <div className={classes.time}>
          {String(timeLeft.seconds).padStart(2, "0")} секунд
        </div>
      </div>
    </div>
  );
};

export default Timer;
