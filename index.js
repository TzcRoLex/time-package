function parseMs(ms) {
  if (isNaN(parseInt(ms) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }

  return {
    years: Number((ms / 315576e5).toFixed(0)),
    months: Number((ms / 26298e5).toFixed(0)),
    weeks: Number((ms / 6048e5).toFixed(0)),
    days: Number((ms / 864e5).toFixed(0)),
    hours: Number((ms / 36e5).toFixed(0)),
    minutes: Number((ms / 6e4).toFixed(0)),
    seconds: Number((ms / 1e3).toFixed(0)),
    microseconds: Number((ms * 1e3).toFixed(0)),
    nanoseconds: Number((ms * 1e3).toFixed(0)),
  };
}

function nanosecondsToMs(ns) {
  if (isNaN(parseInt(ns) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return ns * 0.000001;
}

function microsecondsToMs(ms) {
  if (isNaN(parseInt(ms) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return ms * 0.001;
}

function secondsToMs(s) {
  if (isNaN(parseInt(s) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(s * 1e3);
}

function minutesToMs(m) {
  if (isNaN(parseInt(m) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(m * 6e4);
}

function hoursToMs(h) {
  if (isNaN(parseInt(h) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(h * 36e5);
}

function daysToMs(d) {
  if (isNaN(parseInt(d) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(d * 864e5);
}

function weeksToMs(w) {
  if (isNaN(parseInt(w) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(w * 604800016.56);
}

function monthsToMs(m) {
  if (isNaN(parseInt(m) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(m * 26298e5);
}

function yearsToMs(y) {
  if (isNaN(parseInt(y) / 2)) {
    throw new TypeError("The Type Of Parameter Must Be Number");
  }
  return Math.trunc(y * 315576e5);
}

module.exports = {
  parseMs,
  nanosecondsToMs,
  microsecondsToMs,
  secondsToMs,
  minutesToMs,
  hoursToMs,
  daysToMs,
  weeksToMs,
  monthsToMs,
  yearsToMs
}