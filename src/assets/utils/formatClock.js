export function formatClock() {
  const weekDayEnums = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ];

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = date.getDay();
  const hour = formatNumber(date.getHours());
  const min = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());

  return `${year}年${month}月${day}日 ${weekDayEnums[weekDay]} ${hour}:${min}:${seconds}`
}

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}