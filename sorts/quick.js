/* 
    Ý tưởng:
    Giải thuật của QuickSort dựa trên việc phân hoạch dãy ban đầu thành 2 phần và tìm
    phần tử chủ chốt:
    Dãy 1: gồm các phần tử con bé hơn mid
    Dãy 2: phần tử mid
    Dãy 3: gồm các phần tử con lơn hơn mid
    Trong đó, dãy con thứ 2 đã có thứ tự, nếu các dãy con 1 và 3 chỉ có 1 phần tử thì chúng
    đã có thứ tự, khi đó dãy ban đầu đã được sắp. Ngược lại, nếu các phần tử con lớn hơn 1
    thì dãy ban đầu sẽ có thự tự khi các dãy 1 và 3 được sắp.
    Lưu ý:
    Về nguyên tắc thì phần tử chủ chốt có thể được chọn tùy ý nhưng để đơn giản thì
    phần tử chủ chốt luôn là phần tử trung vị.
    Phần tử chủ chốt sẽ được chọn sẽ có tác động đến hiệu quả thực hiện thuật toán vì
    nó quyết định số lần phân hoạch.
*/

const quickSort = (arr, l, r, compare = 0, inner = 0, outer = 0) => {
  let i = l;
  outer++;
  let j = r;
  outer++;
  let x = arr[Math.floor((l + r) / 2)];
  outer++;
  while (i < j) {
    compare++;
    while (arr[i] < x) {
      compare++;
      i++;
    }
    while (arr[j] > x) {
      compare++;
      j--;
    }
    if (i <= j) {
      compare++;
      let t = arr[i];
      inner++;
      arr[i] = arr[j];
      inner++;
      arr[j] = t;
      inner++;
      i++;
      j--;
    }
  }
  if (l < j) {
    compare++;
    quickSort(arr, l, j, compare, inner, outer);
  }

  if (i < r) {
    compare++;
    quickSort(arr, i, r, compare, inner, outer);
  }

  return arr;
};

module.exports = quickSort;
