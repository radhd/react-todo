import { useState } from "react";

function DateNow() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div>{formatDate(now)}</div>
      <div>{now.toLocaleTimeString()}</div>
    </>
  );
}

export default DateNow;
