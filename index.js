let getTime = () => {
  let getTime = new Date();
  //   return `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
  return {
    hour: getTime.getHours(),
    minutes: getTime.getMinutes(),
    seconds: getTime.getSeconds()
  };
};
// console.log('sadas')

// setInterval(() => {
//   document.getElementById("time").innerHTML = calculateTime().toString();
// }, 1000);

function calculateTime(currentTime, hand) {
  return (360 / hand) * currentTime;
}

let getCurrentTime = getTime();

let [hourDeg, minDeg, secDeg] = [
  calculateTime(getCurrentTime.hour, 12),
  calculateTime(getCurrentTime.minutes, 60),
  calculateTime(getCurrentTime.seconds, 60)
];

console.log(minDeg);

// document.getElementById("hands").animate([
//   {
//     transform: rotate(hourDeg)
//   },
//   {
//     transform: rotate(hourDeg - 1)
//   }
// ]);
