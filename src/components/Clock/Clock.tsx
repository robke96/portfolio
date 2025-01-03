import { useState, useEffect } from "react"
import { Card } from "../ui/card";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="dark flex py-6 text-3xl text-center justify-center items-center font-zodiak">
        <time>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
    </Card>
  )
}
export default Clock