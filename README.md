# @tzcrolex/time

Convert Time Units To Milliseconds And Parse Milliseconds To Object

## Installation

```sh
npm install @tzcrolex/time
```

## Usage
Parse Milliseconds To Object By `parseMs()` Function :
```js
const time = require("@tzcrolex/time");

time.parseMs(315576e5);
/*
    {
      years: 1,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 8766,
      minutes: 525960,
      seconds: 31557600,
      microseconds: 31557600000000,
      nanoseconds: 31557600000000
    }
*/
```
Convert Years To Milliseconds By `yearsToMs()` Function :
```js
time.yearsToMs(4); // 126230400000
```
Convert Months To Milliseconds By `monthsToMs()` Function :
```js
time.monthsToMs(4); // 10519200000
```
Convert Weeks To Milliseconds By `weeksToMs()` Function :
```js
time.weeksToMs(4); // 2419200066
```
Convert Days To Milliseconds By `daysToMs()` Function :
```js
time.daysToMs(4); // 345600000
```
Convert Hours To Milliseconds By `hoursToMs()` Function :
```js
time.hoursToMs(4); // 14400000
```
Convert Minutes To Milliseconds By `minutesToMs()` Function :
```js
time.minutesToMs(4); // 240000
```
Convert Seconds To Milliseconds By `secondsToMs()` Function :
```js
time.secondsToMs(4); // 4000
```
Convert Microseconds To Milliseconds By `microsecondsToMs()` Function :
```js
time.microsecondsToMs(4); // 0.004
```
Convert Nanoseconds To Milliseconds By `nanosecondsToMs()` Function :
```js
time.nanosecondsToMs(4); // 0.000004
```