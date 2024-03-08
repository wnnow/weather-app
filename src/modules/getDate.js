const today = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const nextTmr = new Date(tomorrow);
nextTmr.setDate(tomorrow.getDate() + 1);

function getDayFormat(dayNumber) {
  if (dayNumber < 0 || dayNumber > 6) {
    throw new Error('Not enter value 0-6');
  }
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
  return days[dayNumber];
}

function getMonthFormat(monthNumber) {
  if (monthNumber < 0 || monthNumber > 11) {
    throw new Error('Not enter value 0-11');
  }
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[monthNumber];
}

function getWeatherDateFormat(date) {
  return `${getDayFormat(date.getDay())}, ${getMonthFormat(
    date.getMonth()
  )} ${date.getDate()} ${date.getFullYear()}`;
}
