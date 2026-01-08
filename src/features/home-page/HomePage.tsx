import styles from "./HomePage.module.scss";
import { Card } from "@/shared/ui/Card";
import { Timer } from "../timer";
import { BreakTimer } from "../break-timer";

export function HomePage() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Timer />
      </Card>
      <Card className={styles.card}>
        <BreakTimer />
      </Card>
    </div>
  );
}
