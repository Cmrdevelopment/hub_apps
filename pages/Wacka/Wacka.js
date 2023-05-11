import "./Wacka.css";
import { ramdomTime } from "../../utils/randomTime";
import { templete } from "../../components/Wacka/wackaTemplate";


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
    document.querySelector(".score").textContent = score;
    console.log(score)
    showMole();
    setTimeout(() => {
        timeUp = true;
        score = 0;
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