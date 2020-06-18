//create a function that returns how many candles can be blown out in an array if only the tallest ones can be blown out
function birthdayCakeCandles(candles) {
  let totalCandles = 0;
  // remove duplicates
  let newCandles = [...new Set(candles)];

  // get tallest candle
  let tallestCandle = newCandles.reduce(function (a, b) {
    return Math.max(a, b);
  });

  // count tallest candles
  totalCandles = candles.filter(function (value) {
    return value === tallestCandle;
  }).length;
  console.log(totalCandles);
}

let candles = [2, 3, 4, 5, 5];
birthdayCakeCandles(candles);
