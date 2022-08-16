const bubbleSort = require("./bubble");
const insertionSort = require("./insertion");
const interchangeSort = require("./interchange");
const mergeSort = require("./merge");
const quickSort = require("./quick");
const radixSort = require("./radix");
const selectionSort = require("./selection");
const shellSort = require("./shell");

const { randomArr } = require("../arrays/number");

class Sort {
  constructor(arr) {
    console.log("initialize sort class");
    this.arr = arr;
  }

  bubble() {
    bubbleSort(this.arr);
  }

  insertion() {
    insertionSort(this.arr);
  }

  interchange() {
    interchangeSort(this.arr);
  }

  merge() {
    return mergeSort(this.arr);
  }

  quick() {
    return quickSort(this.arr, 0, this.arr.length - 1);
  }

  radix() {
    radixSort(this.arr);
  }

  selection() {
    selectionSort(this.arr);
  }

  shell() {
    const distance_knuth = [
      [15, 7, 3, 1],
      [127, 40, 13, 4, 1],
    ];
    shellSort(this.arr, distance_knuth);
  }
}

// const sortIns = new Sort(randomArr);

// BUBBLE 25-27s for 100k
// compare: 2505088559 inner: 12515215677 outer: 99999
// sortIns.bubble();

// INTERCHANGE 25-27s for 100k
// compare: 2505088559 inner: 12515215677 outer: 99999
// sortIns.interchange();

// SELECTION 8-10s for 100k
// compare: 1007335, inner: 5000957335, outer: 499995
// sortIns.selection();

// INSERTION 5-7s for 100k
// compare: 2505088559 inner: 2505088559 outer: 399996
// sortIns.insertion();

// QUICK less than 1s for 100k
// compare: 100003, inner: 15744, outer: 3
// const res = sortIns.quick();
// console.log(res);

// RADIX less than 1s for 100k
// compare: 60, inner: 2400000, outer: 81
// sortIns.radix();

// SHELL less than 1s for 100k
// compare: 171058531, inner: 343316984, outer: 399982
// sortIns.shell();

module.exports = Sort;
