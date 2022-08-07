/* 
    Ý tưởng:
    Là tìm cách chèn phần tử a i vào vị trí thích hợp của đoạn đã được sắp xếp để có dãy mới
    a 1 , a 2 ,..a i trở nên có thứ tự. Vị trí này chính là vị trí giữa hai phần tử a k-1 và a k thỏa a k-1 <= a i
    < a k (1<k<i).
*/

const insertionSort = (arr) => {
  let pos, target;
  for (let i = 1; i < arr.length; i++) {
    pos = i - 1;
    target = arr[i];
    while (pos >= 0 && arr[pos] > target) {
      arr[pos + 1] = arr[pos];
      pos--;
    }
    arr[pos + 1] = target;
  }
};

module.exports = insertionSort;
