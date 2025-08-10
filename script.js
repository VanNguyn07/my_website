// Lấy ra elements của trang 

const form = document.getElementById("form");
const inputEmailElement = document.getElementById("inputEmail");
const inputPasswordElement = document.getElementById("inputPassword");


// lắng nghe sự kiện submit của form
form.addEventListener("submit", function(event){
    // ngăn chặn hành động sự kiện load lại trang
    event.preventDefault()

    // validate(xác thực) dữ liệu đầu vào 
    if(!inputEmailElement.value || !inputPasswordElement.value){
        alert("Please fill in all information ")
    }
})

