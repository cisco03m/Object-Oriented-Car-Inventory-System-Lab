function secondsToTime(seconds) {
   const hours = Math.floor(seconds / 3600);
   const minutes = Math.floor((seconds % 3600) / 60);
   const remainingSeconds = seconds % 60;
 
   const formattedHours = hours < 10 ? '0' + hours : hours.toString();
   const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
   const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
 
   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
 
// Example usage:
console.log(secondsToTime(3665));  // Outputs "01:01:05"