

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let LoginButton = document.getElementById("login-button")
let SingupButton = document.getElementById("singup-button") 



let LoginEmail = document.getElementById("email") 
let LoginPassword = document.getElementById("password") 

let SingupName = document.getElementById("sign-name") 
let SingupEmail = document.getElementById("sign-email") 
let SingupPassword = document.getElementById("sign-password") 
let SingupComfirmPassword = document.getElementById("confirm-password") 


signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


LoginButton.addEventListener("click",() => {

    if(LoginEmail.value == "eve.holt@reqres.in" && LoginPassword.value == "cityslicka"){
        let data = {
            email : LoginEmail.value,
            password : LoginPassword.value
        }

    }
    toastr["success"]("My name is Inigo Montoya. You killed my father. Prepare to die!")
})



SingupButton.addEventListener("click", () => {

    if(SingupPassword.value !== SingupComfirmPassword.value){
        toastr["warning"]("password doesn't match?")
    }
    else if(SingupName.value == "" && SingupEmail.value =="" && SingupPassword.value == "" && SingupComfirmPassword.value == ""){
        toastr["error"]("required all filled")
    }
    else{
        let data = {
            name : SingupName.value,
            email : SingupEmail.value,
            password : SingupPassword.value,
        }
        
        console.log(data)
       fetch("https://hotel-booking-api-odw9.onrender.com/users",{
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-type" : "application/json"
        }
       })
       .then((res) => res.json())
       .then(() => {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            toastr["success"]("Sign Up Successfully")
            
       } )
       .finally( () => {
            slider.classList.remove("moveslider");
            formSection.classList.remove("form-section-move");
       } )
    }
    
})