const form = document.getElementById("form");
const inputEmailElement = document.getElementById("inputEmail");
const inputPasswordElement = document.getElementById("inputPassword");
const inputConfirmPasswordElement = document.getElementById("confirmPassword");

const emailErrorElement = document.getElementById("emailError");
const passwordErrorElement = document.getElementById("passwordError");
const confirmPassword1ErrorElement = document.getElementById("confirmPassError1");
const confirmPassword2ErrorElement = document.getElementById("confirmPassError2");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Chặn reload trang

    let valid = true;

    // Check Email
    if (!inputEmailElement.value) {
        emailErrorElement.style.display = "block";
        valid = false;
    } else {
        emailErrorElement.style.display = "none";
        localStorage.setItem("email", inputEmailElement.value); // Lưu email vào localStorage  
    }

    // Check Password
    if (!inputPasswordElement.value) {
        passwordErrorElement.style.display = "block";
        valid = false;
    } else {
        passwordErrorElement.style.display = "none";
        localStorage.setItem("password", inputPasswordElement.value); // Lưu password vào localStorage
    }

    // Check Confirm Password rỗng
    if (!inputConfirmPasswordElement.value) {
        confirmPassword1ErrorElement.style.display = "block";
        valid = false;
    } else {
        confirmPassword1ErrorElement.style.display = "none";
    }

    // Check Confirm Password không khớp
    if(inputPasswordElement.value !== inputConfirmPasswordElement.value){
        confirmPassword2ErrorElement.style.display = "block";
        valid = false;
    }else {
        confirmPassword2ErrorElement.style.display = "none";
    }

        // Nếu tất cả hợp lệ → chuyển trang
    if (valid) {
        window.location.href = "../Sign-In/SignIn.html";
    }
});
