/*
    Ý tưởng: (chia để trị)
    Phân chia dãy ban đầu thành 2 mảng bằng nhau sau đó tiếp tục phân chia 2 mảng đó đến khi nào còn 1 phần tử
    thì bắt đầu trộn vào mảng mới theo thứ tự đã đc sắp xếp
 */

const mergeSort = (arr) => {
  let arrSize = arr.length;
  if (arrSize < 2) return;

  let mid = Math.floor(arrSize / 2);
  let leftHalf = arr.slice(0, mid);
  let rightHalf = arr.slice(mid, arrSize);

  // chia đến khi nào còn 1 phần tử
  mergeSort(leftHalf);
  mergeSort(rightHalf);

  // trộn
  return merge(arr, leftHalf, rightHalf);
};

const merge = (arr, leftHalf, rightHalf) => {
  let leftSize = leftHalf.length;
  let rightSize = rightHalf.length;

  // i là vị trí của leftHalf, j là vị trí của rightHalf, k là vị trí của mảng trộn
  let i = 0,
    j = 0,
    k = 0;

  // trỘn các phần tử vào mảng
  while (i < leftSize && j < rightSize) {
    if (leftHalf[i] <= rightHalf[j]) {
      arr[k] = leftHalf[i];
      i++;
    } else {
      arr[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  // khi đã trộn xong mà còn dư các phần tử thì bỏ vào mảng luôn
  while (i < leftSize) {
    arr[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < rightSize) {
    arr[k] = rightHalf[j];
    j++;
    k++;
  }

  return arr;
};

module.exports = mergeSort;
