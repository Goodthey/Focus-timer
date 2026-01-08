import styles from "./BreakTimer.module.scss";
import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";

export function BreakTimer() {
  const [totalSeconds, setTotalSeconds] = useState(900);
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
    setTotalSeconds(10);
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

  return (
    <div className={styles.breakTimer}>
      <h2>Break Timer</h2>
      <div className={styles.display}>{formatedTime}</div>
      {!isRunning && totalSeconds === 0 ? (
        <Button onClick={handleReset}>Закончить перерыв</Button>
      ) : (
        <Button onClick={isRunning ? handleReset : handleToggle}>
          {!isRunning && totalSeconds === 900
            ? "Начать перерыв"
            : "Закончить досрочно"}
        </Button>
      )}
    </div>
  );
}
