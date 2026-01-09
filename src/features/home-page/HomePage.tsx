import { useState } from "react";
import styles from "./HomePage.module.scss";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Timer } from "../timer";
import { BreakTimer } from "../break-timer";

export function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flipContainer}>
        <div
          className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
        >
          <div className={styles.flipCardFront}>
            <Card className={styles.card}>
              <Timer />
            </Card>
          </div>
          <div className={styles.flipCardBack}>
            <Card className={styles.card}>
              <BreakTimer />
            </Card>
          </div>
        </div>
      </div>
      <Button onClick={handleFlip}>
        {isFlipped ? "Таймер" : "Таймер перерыва"}
      </Button>
    </div>
  );
}
