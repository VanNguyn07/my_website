// Lấy ra elements của trang 
const form = document.getElementById("form");
const inputEmailElement = document.getElementById("inputEmail");
const inputPasswordElement = document.getElementById("inputPassword");

// Lấy ra elements error của trang
const errorEmailElement = document.getElementById("emailError") 
const errorPasswordElement = document.getElementById("passwordError");

// Lấy ra button GG và GitHub
const buttonGGElement = document.getElementById("button-Google");
const buttonGitHubElement = document.getElementById("button-GitHub");

//Lấy ra button registratioin 
const buttonSignUpElement = document.getElementById("button-SignUp");

// Lấy URl của Sign In gg 
const urlGGSignIn = "https://accounts.google.com/o/oauth2/v2/auth" +
        "?client_id=YOUR_CLIENT_ID.apps.googleusercontent.com" +
        "&redirect_uri=YOUR_REDIRECT_URI" +
        "&response_type=code" +
        "&scope=email%20profile%20openid" +
        "&access_type=online";

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

// Lắng nghe sự kiện click của button GG
buttonGGElement.addEventListener("click", function(){
   window.open(urlGGSignIn, "_blank");
})

// Lắng nghe sự kiện click của button GitHub
buttonGitHubElement.addEventListener("click", function(){
    window.open("https://github.com/login", "_blank");
})

// Lắng nghe sự kiện click của button Sign Up
buttonSignUpElement.addEventListener("click", function(){
    window.location.href = "../Sign-Up/SignUp.html";
})