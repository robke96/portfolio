import { useState, useEffect } from "react"
import { Card } from "../ui/card";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="dark py-5 px-12 flex text-2xl items-center justify-center h-full font-zodiak">
        <time>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</time>
    </Card>
  )
}

export default Clock