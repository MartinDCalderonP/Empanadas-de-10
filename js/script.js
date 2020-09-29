'use strict'

// DROPDOWN

function toggleMobileItems(){
    let mobileItems = document.getElementsByClassName("nav-item-mobile");

    if (mobileItems[0].style.display!=="block") {
        for (let i = 0; i < mobileItems.length; i++) {
            mobileItems[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < mobileItems.length; i++) {
            mobileItems[i].style.display = "none";
        }
    }
}

// CAROUSEL

let slideIndex = 1;

showSlides(slideIndex);

setInterval(
    ()=>{
        showSlides(slideIndex += 1);
    }, 5000
);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}  

function showSlides(n) {
    let slides = document.getElementsByClassName("img-div");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
}

// CARGA DE EMPANADAS

let menúEmpanadas = document.querySelector('#menú-empanadas');

const empanadas1 = ["Carne Salteña (Carne a cuchillo con papa)", "Humita", "Pollo con Salsa Blanca", "Acelga con Salsa Blanca", "Roquefort con Apio", "Acelga con Queso", "Roquefort con Jamón"];

const empanadas2 = ["Carne de 10 (Carne suave con aceituna y huevo)", "Pollo", "Carne suave", "Carne a cuchillo", "Carne picante", "Champignon con Queso al Jerez", "Queso y Cebolla"];

const empanadas3 = ["Albahaca, Tomate y Queso", "Panceta, Ciruela y Muzzarella", "Jamón y Queso", "Jamón, Queso y Huevo", "Cantimpalo"];

const pastelitos = ["Pastelitos de Membrillo", "Pastelitos de Batata"];

const empanadasLight = ["Espinaca, Queso y Huevo", "Calabaza con Queso", ""];

const empanadasVeganas = ["Acelga y Queso Vegano", "Cebolla, choclo y Queso Vegano", "Carne Vegana", "Capresse Vegana"];

menúEmpanadas.innerHTML =
    `<h2>
        Empanadas
    </h2>

    <h3>
        Degustalas al Horno o al Soufflé
    </h3>

    <div
        class="uls-div"
    >
        <ul>
            ${empanadas1.map(empanada=>{
                return(
                    `<li>
                        ${empanada}
                    </li>`
                )
            }).join('')}
        </ul>
        
        <ul>
            ${empanadas2.map(empanada=>{
                return(
                    `<li>
                        ${empanada}
                    </li>`
                )
            }).join('')}
        </ul>

        <ul>
            ${empanadas3.map(empanada=>{
                return(
                    `<li>
                        ${empanada}
                    </li>`
                )
            }).join('')}

            ${pastelitos.map(pastelito=>{
                return(
                    `<li
                        class="resaltado"
                    >
                        ${pastelito}
                    </li>`
                )
            }).join('')}
        </ul>
    </div>

    <h2>
        Línea Light
    </h2>

    <div
        class="uls-div"
    >
        ${empanadasLight.map(empanada=>{
            return(
                `<ul>
                    <li>
                        ${empanada}
                    </li>
                </ul>`
            )
        }).join('')}
    </div>

    <h2>
        Línea Vegana
    </h2>

    <div
        class="uls-div"
    >
        ${empanadasVeganas.map(empanada=>{
            return(
                `<ul>
                    <li>
                        ${empanada}
                    </li>
                </ul>`
            )
        }).join('')}
    </div>`;

// CARGA DE PIZZAS

let menúPizzas = document.querySelector('#menú-pizzas');

const pizzas1 = [
    {"nombre": "Muzzarella", "precio": "$310", "descripción": "Salsa de tomate, muzzarella y aceitunas verdes."}, {"nombre": "Muzzarella con Jamón", "precio": "$370", "descripción": "Salsa de tomate, muzzarella, jamón y aceitunas verdes."},
    {"nombre": "Muzzarella con Albahaca", "precio": "$370", "descripción": "Salsa de tomate, muzzarella, albahaca y aceitunas verdes."},
    {"nombre": "Especial de Tomate", "precio": "$450", "descripción": "Salsa de tomate, jamón, muzzarella, rodajas de tomate y aceitunas verdes."},
    {"nombre": "Especial de Morrón", "precio": "$450", "descripción": "Salsa de tomate, jamón, muzzarella, morrón y aceitunas verdes."}
];

const pizzas2 = [
    {"nombre": "Fugazzeta", "precio": "$360", "descripción": "Cebolla, muzzarella y aceitunas verdes."},
    {"nombre": "Napolitana", "precio": "$450", "descripción": "Salsa de tomate y muzzarella, rodajas de tomate con ajo y aceitunas verdes."},
    {"nombre": "Calabresa", "precio": "$450", "descripción": "Salsa de tomate, muzzarella, longaniza, morrón y aceitunas verdes."},
    {"nombre": "Palmitos", "precio": "$590", "descripción": "Salsa de tomate, muzzarella, jamón, morrones, huevos, palmitos con salsa golf y aceitunas verdes."}
];

const pizzas3 = [
    {"nombre": "Anchoa con Muzzarella", "precio": "$400", "descripción": "Salsa de tomate, muzzarella, anchoa, morrón y aceitunas verdes."},
    {"nombre": "Provolone", "precio": "$410", "descripción": "Salsa de tomate, muzzarella, provolone, jamón y aceitunas verdes."},
    {"nombre": "Primavera", "precio": "$450", "descripción": "Salsa de tomate, muzzarella, jamón, tomate, huevo duro y aceitunas verdes."},
    {"nombre": "Pizza Individual", "precio": "$160", "descripción": "Salsa de tomate, muzzarella y aceitunas verdes."},
    {"nombre": "Fainá", "precio": "$60", "descripción": "Porción."}
];

const pizzasVeganas = [
    {"nombre": "Muzzarella Vegana", "precio": "$310", "descripción": "Salsa de tomate, queso vegano y aceitunas verdes."},
    {"nombre": "Fugazzeta Vegana", "precio": "$360", "descripción": "Cebolla, queso vegano y aceitunas verdes."},
    {"nombre": "Especial de Morrón Vegana", "precio": "$450", "descripción": "Salsa de tomate, queso vegano, morrón y aceitunas verdes."},
    {"nombre": "Muzzarella con Albahaca", "precio": "$370", "descripción": "Salsa de tomate, queso vegano, Albahaca y aceitunas verdes."}
];

menúPizzas.innerHTML =
    `<h2>
    Pizzas
    </h2>

    <h3>
        Probalas al Molde o a la Piedra
    </h3>

    <div
        class="uls-div"
    >
        <ul>
            ${pizzas1.map(pizza=>{
                return(
                    `<li>
                        ${pizza.nombre}

                        <p
                            class="resaltado"
                        >
                            ${pizza.precio}
                        </p>

                        <p
                            class="descripción"
                        >
                            ${pizza.descripción}
                        </p>
                    </li>`
                )
            }).join('')}
        </ul>

        <ul>
            ${pizzas2.map(pizza=>{
                return(
                    `<li>
                        ${pizza.nombre}

                        <p
                            class="resaltado"
                        >
                            ${pizza.precio}
                        </p>

                        <p
                            class="descripción"
                        >
                            ${pizza.descripción}
                        </p>
                    </li>`
                )
            }).join('')}
        </ul>

        <ul>
            ${pizzas3.map(pizza=>{
                return(
                    `<li>
                        ${pizza.nombre}

                        <p
                            class="resaltado"
                        >
                            ${pizza.precio}
                        </p>

                        <p
                            class="descripción"
                        >
                            ${pizza.descripción}
                        </p>
                    </li>`
                )
            }).join('')}
        </ul>
    </div>

    <h2>
        Pizzas Veganas
    </h2>

    <h3>
        Probalas al Molde o a la Piedra
    </h3>

    <div
        class="uls-div"
    >
        ${pizzasVeganas.map(pizza=>{
            return(
                `<ul>
                    <li>
                        ${pizza.nombre}

                        <p
                            class="resaltado"
                        >
                            ${pizza.precio}
                        </p>

                        <p
                            class="descripción"
                        >
                            ${pizza.descripción}
                        </p>
                    </li>
                </ul>`
            )
        }).join('')}
    </div>

    <p
        class="resaltado"
    >
        Todas las pizzas llevan orégano
    </p>`;

// MAPA DE SUCURSALES

let mapa = document.querySelector('#mapa');

function toAlmagro() {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1025806778707!2d-58.432193085224874!3d-34.60156748046001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6fe0551635%3A0x5bd0a958c287564b!2sLambar%C3%A9%201067%2C%20C1185%20ABE%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1600707361352!5m2!1ses-419!2sus";
}

function toBalvanera() {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52536.819595208646!2d-58.401264000000005!3d-34.615508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae5cca1a663%3A0xba5b272386c72670!2sAlberti%20%26%20Venezuela%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1600528320595!5m2!1ses-419!2sus";
}

function toBoedo() {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52530.33194502464!2d-58.416231!3d-34.625757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbd177088819%3A0x311ae04e9cade710!2sEmpanadas%20de%2010!5e0!3m2!1ses-419!2sus!4v1600707250026!5m2!1ses-419!2sus";
}