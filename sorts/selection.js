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

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    
    let min = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      
      if (arr[min] > arr[j]) {
        
        min = j;
        
      }
    }
    let t = arr[i];
    
    arr[i] = arr[min];
    
    arr[min] = t;
    
  }

  
  
};

module.exports = selectionSort;
