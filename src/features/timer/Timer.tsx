import styles from "./Timer.module.scss";
import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";

export function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
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
    setTotalSeconds(0);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className={styles.timer}>
      <h2>Timer</h2>
      <div className={styles.display}>{formatedTime}</div>
      <Button onClick={handleToggle}>
        {!isRunning && totalSeconds === 0
          ? "Старт"
          : isRunning
          ? "Пауза"
          : "Продолжить"}
      </Button>
      {totalSeconds > 0 && !isRunning && (
        <Button onClick={handleReset}>Сохранить сессию</Button>
      )}
    </div>
  );
}
