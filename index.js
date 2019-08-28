let getTime = () => {
  let getTimeNow = new Date();
  //   return `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
  return {
    hour: getTimeNow.getHours(),
    minutes: getTimeNow.getMinutes(),
    seconds: getTimeNow.getSeconds()
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




setInterval(() => {
  // console.log(getTime().seconds, secDeg);
  if(getTime().seconds === 59 ) {
    secDeg = 0;
    rotateHand();
    // console.log(secDeg);
  }
}, 1000); 

rotateHand();

function rotateHand(){
  
document.getElementById("hands").animate(
  [
    {
      transform: 'rotate('+secDeg+'deg)',
      transformOrigin: 'bottom',
    },
    {
      transform: 'rotate(360deg)',
      transformOrigin: 'bottom',
    }
  ],
  {
    duration: 60000,
    iterations : Infinity
  }
);
}