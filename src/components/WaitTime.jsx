import { useEffect, useState } from "react"

export default function WaitTime({ lunchHour = 11, lunchMinute = 42 }) {
  const [waitTime, setWaitTime] = useState("...");

  useEffect(() => {
    const calculateAndSetTime = () => {
      const pstDate = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
      });
      const dateObj = new Date(pstDate);
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();

      if (hours < lunchHour || hours > lunchHour + 1) {
        setWaitTime("Appears during lunch");
      }

      if (hours === lunchHour) {
        let wt = "";

        switch (true) {
          case minutes < lunchMinute:
            wt = "Appears during lunch";
            break;
          case minutes < lunchMinute + 1:
            wt = "~1 m";
            break;
          case minutes < lunchMinute + 2:
            wt = "~2 m";
            break;
          case minutes < lunchMinute + 3:
            wt = "~3 m";
            break;
          case minutes < lunchMinute + 8:
            wt = "~5 m";
            break;
          case minutes < lunchMinute + 19:
            wt = "~1-2 m"
            break;
        }

        setWaitTime(wt);
      } else if (hours === lunchHour + 1) {
        setWaitTime("~0 m")
      }
    }

    calculateAndSetTime()
    const interval = setInterval(calculateAndSetTime, 1000 * 60)

    return clearInterval(interval);
  }, [lunchHour, lunchMinute])


  return <h3>Line wait time: <br /> <span className="units">{waitTime}</span></h3>
}