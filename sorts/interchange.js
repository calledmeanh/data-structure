/* 
    Ý tưởng:
    Là xuất phát từ đầu dãy, tìm tất cả nghịch thế chứa các phần tử này, triệt tiêu chúng
    bằng cách đổi chỗ phần tử này với phần tử tương ứng trong cặp nghịch tế.
 */

const interchangeSort = (arr, compare = 0, inner = 0, outer = 0) => {
  for (let i = 0; i < arr.length - 1; i++) {
    outer++;
    for (let j = i + 1; j < arr.length; j++) {
      inner++;
      if (arr[i] > arr[j]) {
        compare++;
        let t = arr[i];
        inner++;
        arr[i] = arr[j];
        inner++;
        arr[j] = t;
        inner++;
      }
    }
  }
  console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
  console.log(arr);
};

module.exports = interchangeSort;
