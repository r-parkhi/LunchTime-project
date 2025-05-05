import React, { useState, useEffect } from 'react';

const countdown = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  return (
    <div>
      <h3>Countdown Timer</h3>
      <p>{seconds} seconds remaining</p>
    </div>
  );
};

export default countdown;