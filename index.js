let getTime = () => {
  let getTimeNow = new Date();
  //   return `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
  return {
    hour:
      getTimeNow.getHours() > 12
        ? getTimeNow.getHours() - 12
        : getTimeNow.getHours(),
    minutes: getTimeNow.getMinutes(),
    seconds: getTimeNow.getSeconds()
  };
};

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

let handSelector = selector => {
  return document.getElementById(selector);
};

setInterval(() => {
  if (getTime().seconds === 0) {
    secDeg = 0;
    rotateHand(handSelector("second-hand"), secDeg, 60000);
  }
}, 1000);

rotateHand(handSelector("second-hand"), secDeg, 60000);
rotateHand(handSelector("minute-hand"), minDeg, 60000 * 60);
rotateHand(handSelector("hour-hand"), hourDeg, 60000 * 60 * 12);

function rotateHand(selector, selectorDeg, duration) {
  selector.animate(
    [
      {
        transform: "rotate(" + selectorDeg + "deg)",
        transformOrigin: "bottom"
      },
      {
        transform: "rotate(360deg)",
        transformOrigin: "bottom"
      }
    ],
    {
      duration: duration,
      iterations: Infinity
    }
  );
}
