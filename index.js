let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let LoginButton = document.getElementById("login-button");
let SingupButton = document.getElementById("singup-button");

let LoginEmail = document.getElementById("email");
let LoginPassword = document.getElementById("password");

let SingupName = document.getElementById("sign-name");
let SingupEmail = document.getElementById("sign-email");
let SingupPassword = document.getElementById("sign-password");
let SingupComfirmPassword = document.getElementById("confirm-password");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});


let redirectToadmin = () => {
    window.location.href = "./pages/Admin.html"
}


LoginButton.addEventListener("click", () => {
  if (LoginEmail.value == "" && LoginPassword.value == "") {
    toastr["error"]("required all filled");
  } 
  else if (
    LoginEmail.value == "eve.holt@reqres.in" &&
    LoginPassword.value == "cityslicka"
  ){
    let data = {
      email: LoginEmail.value,
      password: LoginPassword.value,
    };
    let url = "https://reqres.in/api/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res.token))
      .then(() => {
        toastr["success"]("Login Successfully");
      })
      .then(() => {
        window.location.href = "./pages/Admin.html"
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (
    LoginEmail.value !== "eve.holt@reqres.in" &&
    LoginPassword.value !== "cityslicka"
  ) {
    let data = {
      email: LoginEmail.value,
      password: LoginPassword.value,
    };
    let url = `https://hotel-booking-api-odw9.onrender.com/users?email=${LoginEmail}&password=${LoginPassword}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res.token))
      .then(() => {
        toastr["success"]("Login Successfully");
      })
      .then(() => {
        window.location.href = "./pages/Hotels.html"
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    toastr["error"]("creadential doesn't match");
  }
});

SingupButton.addEventListener("click", () => {
  if (SingupPassword.value !== SingupComfirmPassword.value) {
    toastr["warning"]("password doesn't match?");
  } else if (
    SingupName.value == "" &&
    SingupEmail.value == "" &&
    SingupPassword.value == "" &&
    SingupComfirmPassword.value == ""
  ) {
    toastr["error"]("required all filled");
  } else {
    let data = {
      name: SingupName.value,
      email: SingupEmail.value,
      password: SingupPassword.value,
    };

    let url = "https://hotel-booking-api-odw9.onrender.com/users";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        toastr["success"]("Sign Up Successfully");
      })
      .then(() => {
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
      });
  }
});
