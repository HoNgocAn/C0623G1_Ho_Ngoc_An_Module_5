const arr = [6,-20,1,30,12,34,25];

// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
const arr1 = arr.map((number) => {
    if (number > 5) {
        return number;
    }
})
const newArr = arr1.filter((item) => item >5);
console.log("Mảng mới là " + newArr);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.

const sum = arr.reduce((sum, item) => sum + item, 0);

console.log("Tổng các phẩn tử trong mảng là " + sum);


// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

const v = 30;
if (arr.filter(number => number === v)){
    console.log(v + " có xuất hiện trong mảng")
} else {
    console.log("Không tìm thấy")
}

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

arr.forEach(number => {
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

let [first,...rest]= arr;
console.log("Phần tử đầu tiên là "  + first)
console.log("Mảng mới là " + rest)

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = [
    {
        name: "Lê Văn A",
        age:30
    },
    {
        name: "Nguyễn Văn B",
        age:27
    },
    {
        name: "Trần Thị C",
        age:28
    }
];
const [person1,person2, person3] = person;
console.log(person1.name);
console.log(person1.age);
console.log(person2.name);
console.log(person2.age);
console.log(person3.name);
console.log(person3.age);

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

const sumArray = ([...arrayNumber]) => {
    return arrayNumber.reduce((total,number) => total + number);
}
console.log( "Tổng của mảng là " + sumArray([1,2,3,4,5]));

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

const stringName = (...names) => {
    return names;
}
console.log("Welcome " + stringName ('A', 'B', 'C'));
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

let book = {
    title: 'Tam Quốc diễn nghĩa',
    author: 'La Quán Trung',
    pages: 1000,
    displayInformation() {
        let {title, author, pages} = book;
        console.log(title, author, pages);
    },
};

book.displayInformation();