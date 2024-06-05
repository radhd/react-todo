import { useState } from "react";
import styles from "./DateNow.module.css";

function DateNow() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={`${styles.selfEnd} ${styles.date}`}>
          {formatDate(now)}
        </div>
        <div className={`${styles.selfEnd} ${styles.time}`}>{timeString}</div>
      </div>
    </>
  );
}

export default DateNow;
