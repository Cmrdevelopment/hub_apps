import "./Wacka.css";
import { ramdomTime } from "../../utils/randomTime";

//? ------------------ TEMPLATE GENERAL ---------------------------

const templete = () => /*html*/`
    <div class="interface">
        <h1>Wacka</h1>
        <span class="score">0</span>
        <button id="startGame">Empezar</button>
    </div>
    <div class="game">
        <div class="hole hole1">
            <div clase="mole"></div>
        </div>
        <div class="hole hole2">
            <div clase="mole"></div>
        </div>
        <div class="hole hole3">
            <div clase="mole"></div>
        </div>
        <div class="hole hole4">
            <div clase="mole"></div>
        </div>
        <div class="hole hole5">
            <div clase="mole"></div>
        </div>
        <div class="hole hole6">
            <div clase="mole"></div>
        </div>
    </div>
`;

//? ------------------ VARIABLES GLOBALES ---------------------------

let lastHole;
let score = 0;
let timeUp = false;

//? ------------------ LÓGICA DEL JUEGO ---------------------------

//!--> Función para que el topo que se vaya a asomar sea aleatorio

const randomHole = () => {
    //Index aleatorio
    const index = Math.floor(
      Math.random() * document.querySelectorAll(".hole").length
    );
    //Hoyo aleatorio
    const hole = document.querySelectorAll(".hole")[index];
    //Evitamos que el topo salga dos veces por el mismo hoyo
    if (hole === lastHole) {
        return randomHole(document.querySelectorAll(".hole"));
    }
    lastHole = hole;
    return hole;
};

//!--> Función que decide que topo se asomará

const showMole = () => {
    //Definimos el tiempo que el topo se mantiene asomado
    const time = ramdomTime(500, 1000);
    const hole = randomHole(document.querySelectorAll(".hole"));
    hole.classList.add("up");
    //SetTimeout para elimimar la clase
    setTimeout(() => {
        hole.classList.remove("up");
    // Siempre que el tiempo de la partida no haya acabado seguiremos asomando topos
        if (!timeUp) {
        showMole();
        }
    }, time);
}

//!--> Función que arranca el juego
const startGame = () => {

    timeUp = false;
    score = 0;
    showMole();

    setTimeout(() => {

        timeUp = true;
    }, 15000);
};

//! --> Función que se ejecuta al pulsar el topo : suma puntuación y borra la clase al padre del evento
const wack = (e) => {
    console.log("pulso a topo");
    score++;
    e.target.parentNode.classList.remove("up");
    document.querySelector(".score").textContent = score;
};

//? ------------------ EVENTOS DE LOS ELEMENTOS HTML ---------------------------

const addListeners = () => {
  //Añadimos a los topos el escuchador del click para saber cuando han clicado
    document.querySelectorAll(".mole")
    .forEach((mole) => mole.addEventListener("click", (e) => wack(e)));
        document.querySelector("#startGame").addEventListener("click", startGame);
};

//?--------------- PINTAR EL CONTENEDOR GENERAL---------------------

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete();
    addListeners();
}