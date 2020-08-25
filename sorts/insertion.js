/* 
    Ý tưởng:
    Là tìm cách chèn phần tử a i vào vị trí thích hợp của đoạn đã được sắp xếp để có dãy mới
    a 1 , a 2 ,..a i trở nên có thứ tự. Vị trí này chính là vị trí giữa hai phần tử a k-1 và a k thỏa a k-1 <= a i
    < a k (1<k<i).
*/

const insertionSort = (arr, compare = 0, inner = 0, outer = 0) => {
    let pos, target;
    for (let i = 1; i < arr.length; i++) {
        outer++;
        pos = i - 1;
        outer++;
        target = arr[i];
        outer++;
        while ((pos >= 0) && (arr[pos] > target)) {
            compare++;
            arr[pos + 1] = arr[pos];
            inner++;
            pos--;
        }
        arr[pos + 1] = target;
        outer++
    }

    console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
};

// insertionSort(sortedArr);  // compare: 0 , inner: 0 , outer: 36
// insertionSort(reverseArr); // compare: 45, inner: 45, outer: 36
// insertionSort(randomArr);  // compare: 24, inner: 24, outer: 36

module.exports = insertionSort;