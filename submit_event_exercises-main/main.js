// *************** ejercicio #1 *******************


const div = document.querySelector(".results-container");
const form = document.createElement("form");
const label = document.createElement("label");
label.innerText = "NOMBRE";
const input = document.createElement("input");
input.type = "text";
const submit = document.createElement("input");
submit.type = "submit";
input.name = "name";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const p = document.createElement("p");
    p.innerText = event.target.name.value;
    div.append(p);
    input.value = ""
});
form.append(label, input, submit);
div.append(form);



// *************** ejercicio #2 *******************

const article = document.querySelector("#ejercicio-2");
const form1 = document.querySelector("#ejercicio-2 > form");
form1.addEventListener("submit", (event) => {
    event.preventDefault();
    const p = document.createElement("p");
    if (event.target.data.value.length == 0) {
        p.innerText = "Error: Este campo es obligatorio";
    } else {
        p.innerText = "Ok";
    }
    article.append(p);
})



// *************** ejercicio #3 *******************

const divButtons = document.querySelector("#ejercicio-3 > div");
const formNum = document.querySelector("#ejercicio-3 > form");
formNum.addEventListener("submit", (event) => {
    event.preventDefault();
    let n = parseInt(event.target.number.value);
    for (let i = 1; i <= n; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        if (i % 2 == 0) {
            button.style.backgroundColor = "blue";
        } else if (i % 2 != 0) {
            button.style.backgroundColor = "red";
        } if (i % 10 == 0) {
            button.style.backgroundColor = "green";
        }
        divButtons.append(button);
    }
})



// *************** ejercicio #4 *******************

const divUsers = document.querySelector("#ejercicio-4 >.results-container");
const formUsers = document.createElement("form");
const inputName = document.createElement("input");
inputName.placeholder = "Name";
inputName.name = "name";
const inputEmail = document.createElement("input");
inputEmail.placeholder = "Email";
inputEmail.type = "email";
inputEmail.name = "email";
const inputPassword = document.createElement("input");
inputPassword.placeholder = "Password";
inputPassword.type = "password";
inputPassword.name = "password";
const inputAge = document.createElement("input");
inputAge.placeholder = "Age";
inputAge.type = "number";
inputAge.name = "age";
const inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
formUsers.append(inputName, inputEmail, inputPassword, inputAge, inputSubmit);
divUsers.append(formUsers);
formUsers.addEventListener("submit", (event) => {
    event.preventDefault();
    const p = document.createElement("p");
    p.innerText = `${event.target.name.value} ${event.target.email.value} ${event.target.password.value} ${event.target.age.value}`;
    divUsers.append(p);
})



// *************** ejercicio #5 *******************

const divResults = document.querySelector("#ejercicio-5 > .results-container");
divResults.addEventListener("keydown", (event) => {
    divResults.innerText = "hola";
})

const clear = document.querySelector("#clear-btn");
clear.addEventListener("click", () => {
    divResults.style.backgroundColor = "red";
})



