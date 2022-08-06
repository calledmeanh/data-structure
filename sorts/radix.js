// helper function to get the last nth digit of a number
const getDigit = function (num, nth, compare = 0, inner = 0, outer = 0) {
  // get last nth digit of a number
  let ret = 0;
  outer++;
  while (nth--) {
    compare++;
    ret = num % 10;
    inner++;
    num = Math.floor((num - ret) / 10);
    inner++;
  }
  return ret;
};

// radixSort
const radixSort = (list, compare = 0, inner = 0, outer = 0) => {
  let max = Math.floor(Math.log10(Math.max.apply(Math, list))),
    // get the length of digits of the max value in this array
    digitBuckets = [],
    idx = 0;
  outer++;
  outer++;
  outer++;

  for (let i = 0; i < max + 1; i++) {
    outer++;
    // rebuild the digit buckets according to this digit
    digitBuckets = [];
    outer++;
    for (let j = 0; j < list.length; j++) {
      inner++;
      let digit = getDigit(list[j], i + 1, compare, inner, outer);
      inner++;
      digitBuckets[digit] = digitBuckets[digit] || [];
      inner;
      digitBuckets[digit].push(list[j]);
    }

    // rebuild the list according to this digit
    idx = 0;
    outer++;
    for (let t = 0; t < digitBuckets.length; t++) {
      outer++;
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        compare++;
        for (j = 0; j < digitBuckets[t].length; j++) {
          inner++;
          list[idx++] = digitBuckets[t][j];
          inner++;
        }
      }
    }
  }
  console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
  console.log(list);
};

module.exports = radixSort;
