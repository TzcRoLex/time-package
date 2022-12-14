# Time

Convert Time Units To Milliseconds And Parse Milliseconds To Object

## Installation

```bash
npm install @tzcrolex/time
```

## Usage
Parse Milliseconds To Object By `parseMs()` Function :
```javascript
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
```javascript
time.yearsToMs(4); // 126230400000
```
Convert Months To Milliseconds By `monthsToMs()` Function :
```javascript
time.monthsToMs(4); // 10519200000
```
Convert Weeks To Milliseconds By `weeksToMs()` Function :
```javascript
time.weeksToMs(4); // 2419200066
```
Convert Days To Milliseconds By `daysToMs()` Function :
```javascript
time.daysToMs(4); // 345600000
```
Convert Hours To Milliseconds By `hoursToMs()` Function :
```javascript
time.hoursToMs(4); // 14400000
```
Convert Minutes To Milliseconds By `minutesToMs()` Function :
```javascript
time.minutesToMs(4); // 240000
```
Convert Seconds To Milliseconds By `secondsToMs()` Function :
```javascript
time.secondsToMs(4); // 4000
```
Convert Microseconds To Milliseconds By `microsecondsToMs()` Function :
```javascript
time.microsecondsToMs(4); // 0.004
```
Convert Nanoseconds To Milliseconds By `nanosecondsToMs()` Function :
```javascript
time.nanosecondsToMs(4); // 0.000004
```
