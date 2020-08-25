/* 
    Ý tưởng:
    Là xuất phát từ đầu dãy, tìm tất cả nghịch thế chứa các phần tử này, triệt tiêu chúng
    bằng cách đổi chỗ phần tử này với phần tử tương ứng trong cặp nghịch tế.
 */

const interchangeSort = (arr, compare = 0, inner = 0, outer = 0) => {
    let arrCopy = arr.slice();
    for (let i = 0; i < arrCopy.length - 1; i++) {
        outer++;
        for (let j = i + 1; j < arrCopy.length; j++) {
            inner++;
            if (arrCopy[i] > arrCopy[j]) {
                compare++;
                let t = arrCopy[i];
                inner++;
                arrCopy[i] = arrCopy[j];
                inner++;
                arrCopy[j] = t;
                inner++;
            }
        }
    }
    console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
};

// interchangeSort(sortedArr);   // compare: 0 , inner: 45 , outer: 9
// interchangeSort(reverseArr);  // compare: 45, inner: 180, outer: 9
// interchangeSort(randomArr);   // compare: 24, inner: 117, outer: 9