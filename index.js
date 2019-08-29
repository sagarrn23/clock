let getTime = () => {
  let getTimeNow = new Date();
  return {
    hour:
      getTimeNow.getHours() > 12
        ? getTimeNow.getHours() - 12
        : getTimeNow.getHours(),
    minutes: getTimeNow.getMinutes(),
    seconds: getTimeNow.getSeconds()
  };
};

setInterval(() => {
  document.getElementById("time").innerHTML = `<h1>${getTime().hour}:${getTime().minutes}:${getTime().seconds}</h1>`;
}, 1000);

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

function checkIfTimeZero(currTime, interval, selector, handDeg, duration) {
  setInterval(() => {
    console.log(getTime()[currTime]);
    if (getTime()[currTime] === 0) {
      handDeg = 0;
      rotateHand(handSelector(selector), handDeg, duration);
    }
  }, interval);
}

checkIfTimeZero('seconds', 1000, 'second-hand', secDeg, 60000);
checkIfTimeZero('minutes', 1000*60, 'minute-hand', minDeg, 60000*60);
checkIfTimeZero('hour', 1000*60*60, 'hour-hand', hourDeg, 60000*60*12);

rotateHand(
  handSelector("second-hand"),
  secDeg,
  (60000) - (getCurrentTime.seconds * 1000)
);
rotateHand(
  handSelector("minute-hand"),
  minDeg,
  (60000 * 60) - (getCurrentTime.minutes * 60 * 1000)
);
rotateHand(
  handSelector("hour-hand"),
  hourDeg,
  (60000 * 60 * 12) - (getCurrentTime.hour * 60 * 60 * 1000)
);

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
