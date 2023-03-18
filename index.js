
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let LoginButton = document.getElementById("login-button")
let SingupButton = document.getElementById("singup-button") 

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


LoginButton.addEventListener("click",() => {
    Notiflix.Notify.success('Sol lucet omnibus');
})