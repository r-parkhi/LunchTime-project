import React, { useState, useEffect, useCallback } from 'react';

const Countdown = ({ targetHour, targetMinute }) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(targetHour, targetMinute, 0, 0);

    if (targetTime < now) {
      targetTime.setDate(targetTime.getDate() + 1); // Move to the next day
    }

    const difference = targetTime - now;
    const timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  }, [targetHour, targetMinute]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <>
      {timeLeft.hours}h {timeLeft.minutes}m
    </>
  );
};

export default Countdown;