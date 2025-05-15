export function getLunchTime() {
  const lateStartDays = [new Date("May 14, 2025"), new Date("May 21, 2025")];
  const hrDays = [new Date("May 15, 2025")];
  const today = new Date();

  if (lateStartDays.some(date => isSameDate(today, date))) {
    return { hour: 12, minute: 26 }
  } else if (hrDays.some(date => isSameDate(today, date))) {
    return { hour: 12, minute: 1 }
  } else {
    return { hour: 11, minute: 42 }
  }
}

/**
 * 
 * @param {Date} date1 
 * @param {Date} date2 
 */
function isSameDate(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&  // 0-indexed: Jan = 0
    date1.getDate() === date2.getDate()
  );
}