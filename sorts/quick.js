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

const quickSort = (arr, l, r) => {
  let i = l;
  
  let j = r;
  
  let x = arr[Math.floor((l + r) / 2)];
  
  while (i < j) {
    
    while (arr[i] < x) {
      
      i++;
    }
    while (arr[j] > x) {
      
      j--;
    }
    if (i <= j) {
      
      let t = arr[i];
      
      arr[i] = arr[j];
      
      arr[j] = t;
      
      i++;
      j--;
    }
  }
  if (l < j) {
    
    quickSort(arr, l, j, compare, inner, outer);
  }

  if (i < r) {
    
    quickSort(arr, i, r, compare, inner, outer);
  }

  return arr;
};

module.exports = quickSort;
