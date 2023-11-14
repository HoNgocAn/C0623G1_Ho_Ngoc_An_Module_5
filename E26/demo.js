const arr = [6,-20,1,30,12,34,25];

// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
let newArr = arr.filter((item) => item >5);
console.log("Mảng mới là " + newArr);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.

let sum = newArr.reduce((sum, item) => sum + item, 0);

console.log("Tổng các phẩn tử trong mảng là " + sum);


// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

const v = 30;
if (newArr.filter(number => number === v)){
    console.log(v + " có xuất hiện trong mảng")
} else {
    console.log("Không tìm thấy")
}

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

newArr.forEach(number => {
    if (number < 0) {
        console.log(number + " nhỏ hơn không")
    } else {
        console.log(number + " lớn hơn 0")
    }
});


// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

const firstFind= newArr.find((element) => element > 3);
console.log(firstFind + " là phẩn tử đầu tiên trong mảng lớn hơn 3");

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".


// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".


// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
