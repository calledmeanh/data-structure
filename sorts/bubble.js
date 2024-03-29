/* 
    Ý tưởng:
    Ý tưởng của giái thuật này rất đơn giản. Là xuất phát từ cuối (đầu) dãy, đổi chỗ các cặp
    phần tử kế cận để đưa phần tử nhỏ (lớn) hơn trong cặp phần tử đó về vị trí đúng đầu
    (cuối) dãy hiện hành, sau đó sẽ không xét đến nó ở bước tiếp theo, do vậy ở lần xử lý
    thứ i sẽ có vị trí đầu dãy là i.
*/

const bubbleSort = (arr) => {
  let arrCopy = arr.slice();
  // cách 1: xuất phát từ ĐẦU dãy và duyệt các phần tử ở CUỐI dãy.
  // Tìm các phần tử LỚN trong dãy nghịch thế để đưa về CUỐI mảng

  //step 1: start at the first index of array and sort at the end
  for (let i = 0; i < arrCopy.length - 1; i++) {
    for (let j = arrCopy.length - 1; j > i; j--) {
      if (arrCopy[j - 1] > arrCopy[j]) {
        let t = arrCopy[j - 1];
        arrCopy[j - 1] = arrCopy[j];
        arrCopy[j] = t;
      }
    }
  }

  // cách 2: xuất phát từ CUỐI dãy và duyệt các phần tử ở ĐẦU dãy.
  // Tìm các phần tử NHỎ trong dãy nghịch thế để đưa về ĐẦU mảng

  //step 1: start at the end index of array and sort at the first
  /* for (let i = arrCopy.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arrCopy[j + 1] < arrCopy[j]) {
        let t = arrCopy[j + 1];
        arrCopy[j + 1] = arrCopy[j];
        arrCopy[j] = t;
      }
    }
  } */
};

module.exports = bubbleSort;
