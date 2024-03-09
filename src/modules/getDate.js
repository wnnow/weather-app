function getDateRelativeToToday(iteration) {
  let date = new Date();
  date.setDate(date.getDate() + iteration); //
  return date;
}

function getDayFormat(dayNumber) {
  if (dayNumber < 0 || dayNumber > 6) {
    throw new Error('Not enter value 0-6');
  }
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
  return days[dayNumber];
}

function getMonthFormat(monthNumber) {
  if (monthNumber < 0 || monthNumber > 11) {
    throw new Error('Not enter value 0-11');
  }
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  return months[monthNumber];
}

function getWeatherDateFormat(date) {
  return `${getDayFormat(date.getDay())}, ${getMonthFormat(
    date.getMonth()
  )} ${date.getDate()} ${date.getFullYear()}`;
}

export {
  getDateRelativeToToday,
  getDayFormat,
  getMonthFormat,
  getWeatherDateFormat,
};
