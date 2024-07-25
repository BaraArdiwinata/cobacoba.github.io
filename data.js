let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");

admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", "usernameInput.value");
  logoutButton.style.display = "block";

  if (usernameInput.value == "Sinta Dewi Rahmawati" && passwordInput.value == "21062005") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basic.style.display = "none";
    admin.style.display = "block";
    atasan.style.display = "none";
  } else if (usernameInput.value == "Faiz Hazmi Maulana" && passwordInput.value == "03112004") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basic.style.display = "none";
    admin.style.display = "block";
    atasan.style.display = "none";
  } else if (usernameInput.value == "Annisa Nur Fauzi" && passwordInput.value == "13102004") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basic.style.display = "none";
    admin.style.display = "block";
    atasan.style.display = "none";
  } else if (usernameInput.value == "Lailatul Fitaliqoh" && passwordInput.value == "16092004") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basic.style.display = "none";
    admin.style.display = "block";
    atasan.style.display = "none";
  } else {
    localStorage.setItem("role", "basic");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    admin.style.display = "none";
    basic.style.display = "block";
  }
}

if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    basic.style.display = "none";
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
    basic.style.display = "block";
  }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}