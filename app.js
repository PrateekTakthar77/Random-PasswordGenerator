const button = document.querySelector(".btn");
const inputField = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const copied = document.querySelector(".copy-alert")

button.addEventListener("click", () => {
    passwordcreated();
})

copyIcon.addEventListener("click", () => {
    if (inputField.value) {
        copyPassword();
        copied.classList.remove("active");
        setTimeout(() => {
            copied.classList.add("active");
        }, 3000);
    }
})

function copyPassword() {
    inputField.select();
    inputField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputField.value);
    copied.innerHTML = "Password Copied!";
}

function passwordcreated() {
    const inputField = document.getElementById("input");
    const character =
        "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passLenght = 14;
    let Randompassword = "";
    for (let i = 0; i < passLenght; i++) {
        let random = Math.floor(Math.random() * character.length);
        Randompassword += character.substring(random, random + 1);
    }
    inputField.value = Randompassword;
}



