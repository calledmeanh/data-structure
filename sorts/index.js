const bubbleSort = require('./bubble');
const insertionSort = require('./insertion');
const interchangeSort = require('./interchange');
const quickSort = require('./quick');
const radixSort = require('./radix');
const selectionSort = require('./selection');
const shellSort = require('./shell');

const {
    sortedArr,
    reverseArr,
    randomArr
} = require('./arrays/array');


class Sort {
    constructor(arr) {
        console.log('initialize sort class');
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

    quick() {
        quickSort(this.arr, 0, this.arr.length - 1);
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
            [127, 40, 13, 4, 1]
        ];
        shellSort(this.arr, distance_knuth);
    }

}

module.exports = Sort;