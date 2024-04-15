export function formatDuration(durationTime: number) {
  var hours = Math.floor(durationTime / 3600);
  var remainingSeconds = durationTime % 3600;
  var minutes = Math.floor(remainingSeconds / 60);

  if (hours < 1) {
    return `${(minutes < 10 ? '0' : '') + minutes} min`;
  } else {
    return `${hours}:${(minutes < 10 ? '0' : '') + minutes} h`;
  }
}