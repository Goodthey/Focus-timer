import styles from "./BreakTimer.module.scss";
import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";

export function BreakTimer() {
  const [totalSeconds, setTotalSeconds] = useState(900);
  const [breakDuration, setBreakDuration] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalSeconds(breakDuration * 60);
  };

  const handleIncrease = () => {
    if (breakDuration < 45) {
      setBreakDuration((prev) => prev + 5);
    }
  };

  const handleDecrease = () => {
    if (breakDuration > 5) {
      setBreakDuration((prev) => prev - 5);
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
      setTotalSeconds(breakDuration * 60);
    }
  }, [breakDuration, isRunning]);

  return (
    <div className={styles.breakTimer}>
      <h2>Break Timer</h2>
      <div className={styles.display}>{formatedTime}</div>
      {!isRunning && totalSeconds === 0 ? (
        <Button onClick={handleReset}>Закончить перерыв</Button>
      ) : (
        <Button onClick={isRunning ? handleReset : handleToggle}>
          {!isRunning && totalSeconds === breakDuration * 60
            ? "Начать перерыв"
            : "Закончить досрочно"}
        </Button>
      )}
      {!isRunning && totalSeconds === breakDuration * 60 && (
        <div className={styles.controlButtons}>
          <Button onClick={handleIncrease}>+ 5 мин</Button>
          <Button onClick={handleDecrease}>- 5 мин</Button>
        </div>
      )}
    </div>
  );
}
