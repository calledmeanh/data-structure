// helper function to get the last nth digit of a number
const getDigit = function (num, nth) {
  // get last nth digit of a number
  let ret = 0;

  while (nth--) {
    ret = num % 10;

    num = Math.floor((num - ret) / 10);
  }
  return ret;
};

// radixSort
const radixSort = (list) => {
  let max = Math.floor(Math.log10(Math.max.apply(Math, list))),
    // get the length of digits of the max value in this array
    digitBuckets = [],
    idx = 0;

  for (let i = 0; i < max + 1; i++) {
    // rebuild the digit buckets according to this digit
    digitBuckets = [];

    for (let j = 0; j < list.length; j++) {
      let digit = getDigit(list[j], i + 1, compare, inner, outer);

      digitBuckets[digit] = digitBuckets[digit] || [];
      inner;
      digitBuckets[digit].push(list[j]);
    }

    // rebuild the list according to this digit
    idx = 0;

    for (let t = 0; t < digitBuckets.length; t++) {
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        for (j = 0; j < digitBuckets[t].length; j++) {
          list[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
};

module.exports = radixSort;
