/* 
    Ý tưởng:
    Phân chia dãy ban đầu thành những dãy con gồm các phần tử ở vị trí cách nhau h vị trí:
    Dãy ban đầu a 1 , a 2 ,…,an được xem như sự xen kẽ của các dãy con sau:
    Dãy con thứ nhất: a 1 , a h+1 , a 2h+1
    Dãy con thứ nhất: a 2 , a h+2 , a 2h+2
    …
    Dãy con thứ nhất: a h , a 2h , a 3h

    Lưu ý:
    Yếu tố quyết định tính hiệu quả của thuật toán là cách chọn khoảng cách h trong
    từng bước sắp xếp và số bước sắp xếp.
    Knuth đề nghị:
    127,40,13,4,1
    15,7,3,1
*/

const shellSort = (arr, distance) => {
  let determineArray = arr.length % 2 == 0 ? distance[0] : distance[1];

  for (let step = 0; step < determineArray.length; step++) {
    let dist = determineArray[step];

    for (let i = dist; i < arr.length; i++) {
      let x = arr[i];

      let j = i - dist;

      while (j >= 0 && arr[j] > x) {
        arr[j + dist] = arr[j];

        j = j - dist;
      }
      arr[j + dist] = x;
    }
  }
};

const distance_knuth = [
  [15, 7, 3, 1],
  [127, 40, 13, 4, 1],
];

module.exports = shellSort;
