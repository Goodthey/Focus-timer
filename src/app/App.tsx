import { Card } from "@/shared/ui/Card";
import { Timer } from "@/features/timer";
import { BreakTimer } from "@/features/break-timer";

function App() {
  return (
    <>
      <div>
        <Card>
          <Timer />
        </Card>
        <Card>
          <BreakTimer />
        </Card>
      </div>
    </>
  );
}

export default App;
