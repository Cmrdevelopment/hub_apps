import { titulo } from "../titulo/titulo";
import "./wackaTemplate.css";

//? ------------------ TEMPLATE GENERAL ---------------------------

export const templete = () => /*html*/ `
    <div class="interface">
        ${titulo("Wacka", 2)}
        <span class="score">0</span>
        <button id="startGame">Empezar</button>
    </div>
    <div class="game">
        <div class="hole hole1">
            <div class="mole"></div>
        </div>
        <div class="hole hole2">
            <div class="mole"></div>
        </div>
        <div class="hole hole3">
            <div class="mole"></div>
        </div>
        <div class="hole hole4">
            <div class="mole"></div>
        </div>
        <div class="hole hole5">
            <div class="mole"></div>
        </div>
        <div class="hole hole6">
            <div class="mole"></div>
        </div>
    
    <div id="modalPuntos">
            <div id="containerModal">
                <div id="modal">
                    <h3>Fantastico!</h3>
                    <p class="puntos"></p>
                    <button id="close">CERRAR</button>
                </div>
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683726544/lindo-pequeno-topo-caricatura-sentado_188253-4210-removebg-preview_ur8crq_1_quhoty.png" class="gifTopo" alt="gif topo">
            </div>
    </div>
    </div>
`;
