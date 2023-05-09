import "./Wacka.css";
import { ramdomTime } from "../../utils/randomTime";

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


let lastHole;
let score = 0;
let timeUp = false;

const randomHole = () => {
    //Index aleatorio para que salga de forma ramdon el topo
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

const addListeners = () => {

};

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete();
    showMole();
}