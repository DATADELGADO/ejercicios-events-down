
// Este array debe usarse para el ejercicio 10
const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]



// # Ejercicios DOM: Click events

// En el archivo HTML que encontrarás en este respositorio hay escritos 10 ejercicios para practicar los`click events`.Junto al HTML hay un archivo CSS y otro JS, que deberás usar también para poder completar los ejercicios, y que ya contienen algo de código previo para ayudarte.  

// 1. Lanza el HTML en el navegador para poder ver los ejercicios.
// 2. usa los archivos JS y CSS que vienen con el repositorio(y que ya están enlazados al HTML) para escribir tu código y completar los ejercicios.



// *************** #1 *******************

const button = document.querySelector("#ejercicio-1 > button");
button.addEventListener("click", () => {
    const colors = ["red", "blue", "yellow", "pink", "skyblue"];
    const body = document.querySelector("body");
    body.style.backgroundColor = colors[Math.round(Math.random() * colors.length - 1)];
})


// *************** #2 *******************

const counter = document.querySelector("#counter");
const counterBottons = document.querySelector("#counter-btns");
const max = counterBottons.children[0];
const min = counterBottons.lastElementChild;

max.addEventListener("click", () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
});

min.addEventListener("click", () => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
});



// *************** #3 *******************

const p = document.querySelector("#ejercicio-3 > p");
const button3 = document.querySelector("#ejercicio-3 > button");
button3.addEventListener("click", () => {
    if (p.style.display !== "none") {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
})


// *************** #4 *******************


const ul = document.querySelector("#ejercicio-4 > ul");
const botton4 = document.querySelector("#ejercicio-4 > button");
botton4.addEventListener("click", () => {
    if (ul.children.length != 0) {
        ul.firstElementChild.remove();
    }
})


// *************** #5 *******************

const ul1 = document.querySelector("#ejercicio-5 > ul");
const contents = document.querySelectorAll(".paragraph-container");
for (let content of contents) {
    const button = content.children[1];
    button.addEventListener("click", () => {
        if (content.children[0].tagName == "P") {
            ul1.append(content.children[0]);
        }
    })
}


// *************** #6 *******************
const content = document.querySelector("#square-container");

const refresh = (content) => {
    content = document.querySelector("#square-container");
    for (let square of content.children) {
        square.addEventListener("click", () => {
            square.remove();
        })
    }
}
refresh(content)

const button4 = document.querySelector("#ejercicio-6 > button");
button4.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("square");
    content.append(div);
    refresh(content);
})


// *************** #7 *******************

const div = document.querySelector("#ejercicio-7 > .color-div");
const buttons5 = document.querySelector("#color_btns");
for (let button of buttons5.children) {
    button.addEventListener("click", () => div.style.backgroundColor = button.innerHTML.toLowerCase())
}

// *************** #8 *******************

const buttonOpen = document.querySelector("#faq-title > button");
const lorem = document.querySelector("#faq-card > p");
buttonOpen.addEventListener("click", () => {
    if (lorem.style.visibility != "hidden" && buttonOpen.innerHTML == "Close") {
        lorem.style.visibility = "hidden";
        buttonOpen.innerHTML = "Open"
    } else {
        lorem.style.visibility = "visible";
        buttonOpen.innerHTML = "Close"
    }
})


// *************** #9 *******************





// ************** #10 ******************

const article = document.querySelector("#ejercicio-10");
for (let dat of data) {
    let { id, name, img } = dat;
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = id;
    const h4 = document.createElement("h4");
    h4.innerText = name;
    const imge = document.createElement("img");
    imge.src = img;
    div.append(span, h4, imge);
    div.style.border = "solid 1px black";
    div.style.display = "flex";
    div.style.justifyContent = "space-evenly"
    div.style.alignItems = "center";
    article.append(div);
}








