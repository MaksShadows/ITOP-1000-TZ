const setTimeFormat = (timeInSeconds) => {
   let hours = Math.floor(timeInSeconds / 3600);
   let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
   let seconds = timeInSeconds - (hours * 3600) - (minutes * 60);


     const hoursFormat = hours < 10 ? `0${hours}` : hours;
      const minutesFormat =  minutes < 10 ? `0${minutes}` : minutes;
     const secondsFormant = seconds < 10 ? `0${seconds}` : seconds;


  return `${hoursFormat}:${minutesFormat}:${secondsFormant}`;

};

export default setTimeFormat;

