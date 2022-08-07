/* 
    Ý tưởng:
    Là xuất phát từ đầu dãy, tìm tất cả nghịch thế chứa các phần tử này, triệt tiêu chúng
    bằng cách đổi chỗ phần tử này với phần tử tương ứng trong cặp nghịch tế.
 */

const interchangeSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let j = 0;
      let i = 0;
      if (arr[i] > arr[j]) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
  }
};

module.exports = interchangeSort;
