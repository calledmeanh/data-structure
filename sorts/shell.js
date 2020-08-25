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

const shellSort = (arr, distance, compare = 0, inner = 0, outer = 0) => {
    let determineArray = arr.length % 2 == 0 ? distance[0] : distance[1];

    for (let step = 0; step < determineArray.length; step++) {
        outer++;
        let dist = determineArray[step];
        outer++;
        for (let i = dist; i < arr.length; i++) {
            inner++;
            let x = arr[i];
            inner++;
            let j = i - dist;
            inner++;
            while (j >= 0 && arr[j] > x) {
                compare++;
                arr[j + dist] = arr[j];
                inner++;
                j = j - dist;
                inner++;
            }
            arr[j + dist] = x;
            outer++;
        }
    }
    console.log(`compare: ${compare}, inner: ${inner}, outer: ${outer}`);
}

const distance_knuth = [
    [15, 7, 3, 1],
    [127, 40, 13, 4, 1]
];

// shellSort(sortedArr, distance_knuth);  // compare: 0 , inner: 57, outer: 27
// shellSort(reverseArr, distance_knuth); // compare: 11, inner: 79, outer: 27
// shellSort(randomArr, distance_knuth);  // compare: 11, inner: 79, outer: 27