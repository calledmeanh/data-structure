/* 
    Ý tưởng:
    Mô phỏng 1 trong những cách sắp xếp tự nhiên nhất trong thực tế: chọn phần tử
    nhỏ nhất trong N phần tử ban đầu, đưa phần tử này về vị trí đúng là đầu dãy hiện
    hành; sau đó không quan tâm đến nó nữa, xem dãy hiện hành chỉ còn N-1 phần tử
    của dãy ban đầu, bắt đầu từ vị trí thứ, lặp lại quá trình trên cho dãy hiện hành…đến
    khi dãy hiện hành chỉ còn 1 phần tử. Dãy ban đầu có N phần tử, vậy tóm tắt ý tưởng
    thuật toán là thực hiện N – 1 lượt việc đưa phần tử nhỏ nhất trong dãy hiện hành về
    vị trí đúng ở đầu dãy.
*/

const selectionSort = (arr, compare = 0, inner = 0, outer = 0) => {
    let arrCopy = arr.slice();
    for (let i = 0; i < arrCopy.length - 1; i++) {
        outer++;
        let min = i;
        outer++;
        for (let j = i + 1; j < arrCopy.length; j++) {
            inner++;
            if (arrCopy[min] > arrCopy[j]) {
                compare++;
                min = j;
                inner++
            }
        }
        let t = arrCopy[i];
        outer++;
        arrCopy[i] = arrCopy[min];
        outer++;
        arrCopy[min] = t;
        outer++;
    }

    console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
};

// selectionSort(sortedArr);  // compare: 0 , inner: 45, outer: 45
// selectionSort(reverseArr); // compare: 25, inner: 70, outer: 45
// selectionSort(randomArr);  // compare: 14, inner: 59, outer: 45