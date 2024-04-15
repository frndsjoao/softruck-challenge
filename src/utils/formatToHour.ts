export function formatToHour(dateString: string) {
  var date = new Date(dateString);

  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();

  var formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

  return formattedTime
}