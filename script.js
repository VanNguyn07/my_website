// Lấy ra elements của trang 

const form = document.getElementById("form");
const inputEmailElement = document.getElementById("inputEmail");
const inputPasswordElement = document.getElementById("inputPassword");

// Lấy ra elements error của trang
const errorEmailElement = document.getElementById("emailError") 
const errorPasswordElement = document.getElementById("passwordError");

// lắng nghe sự kiện submit của form
form.addEventListener("submit", function(event){
    // ngăn chặn hành động sự kiện load lại trang
    event.preventDefault()

    // validate(xác thực) dữ liệu đầu vào 
    if(!inputEmailElement.value){
        errorEmailElement.style.display = "block";
    }else {
        errorEmailElement.style.display = "none";
    }
    
    if(!inputPasswordElement.value){
        errorPasswordElement.style.display = "block";
    } else {
        errorPasswordElement.style.display = "none";
    }
})

