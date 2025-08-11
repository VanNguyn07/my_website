const form = document.getElementById("form");
const inputEmailElement = document.getElementById("inputEmail");
const inputPasswordElement = document.getElementById("inputPassword");
const inputConfirmPasswordElement = document.getElementById("confirmPassword");

const emailErrorElement = document.getElementById("emailError");
const passwordErrorElement = document.getElementById("passwordError");
const confirmPasswordErrorElement = document.getElementById("confirmPassError");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Chặn reload trang

    let valid = true;

    if (!inputEmailElement.value) {
        emailErrorElement.style.display = "block";
        valid = false;
    } else {
        emailErrorElement.style.display = "none";
    }

    if (!inputPasswordElement.value) {
        passwordErrorElement.style.display = "block";
        valid = false;
    } else {
        passwordErrorElement.style.display = "none";
    }

    if (!inputConfirmPasswordElement.value) {
        confirmPasswordErrorElement.style.display = "block";
        valid = false;
    } else {
        confirmPasswordErrorElement.style.display = "none";
    }

    // Nếu tất cả hợp lệ → chuyển trang
    if (valid) {
        window.location.href = "../Sign-In/SignIn.html";
    }
});
