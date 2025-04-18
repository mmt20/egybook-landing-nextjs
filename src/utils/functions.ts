export const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = firstDay.getDay();

  const days = Array(startDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};
