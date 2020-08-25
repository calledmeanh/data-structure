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

const quickSort = (a, l, r, compare = 0, inner = 0, outer = 0) => {
    let i = l;
    outer++;
    let j = r;
    outer++;
    let x = a[Math.floor((l + r) / 2)];
    outer++;
    while (i < j) {
        compare++;
        while (a[i] < x) {
            compare++;
            i++;
        }
        while (a[j] > x) {
            compare++;
            j--;
        } 
        if (i <= j) {
            compare++;
            let t = a[i];
            inner++;
            a[i] = a[j];
            inner++;
            a[j] = t;
            inner++;
            i++;
            j--;
        }
    }
    if (l < j){
        compare++;
        quickSort(a, l, j, compare, inner, outer);
    }
        
    if (i < r){
        compare++;
        quickSort(a, i, r, compare, inner, outer);
    }
        
    console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
};

// quickSort(sortedArr, 0, sortedArr.length - 1);   // compare: 13, inner: 3 , outer: 3
// quickSort(reverseArr, 0, reverseArr.length - 1); // compare: 12, inner: 15, outer: 3
// quickSort(randomArr, 0, randomArr.length - 1);   // compare: 13, inner: 6 , outer: 3