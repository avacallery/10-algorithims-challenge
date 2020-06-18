//create a function that returns how many candles can be blown out in an array if only the tallest ones can be blown out

function birthdayCakeCandles(age, candlesHeight) {
  let totalCandles = 0;
  for (i = 0; i < candlesHeight.length; i++) {
    if (age >= candlesHeight[i] && age <= candlesHeight[i]) {
      totalCandles += 1;
    }
  }
  console.log(totalCandles);
}

birthdayCakeCandles(3, [1, 2, 3, 3]);
