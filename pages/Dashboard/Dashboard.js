import { helloUser } from "../../utils/hello";
import { initControler } from "../../utils/route";
import "./Dashboard.css";


const templete = () => {
    return /*html*/ `
    <div class="saludo">
    <h1>Hola ${helloUser()}, ¡a jugar!</h1>
    </div>
    <div id="containerDashboard">
        <ul>
            <li>
                <figure id="figurePokemon" class="figureDashboard">
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1682955920/pokemon-primera-generacion.1682856451.4993_w1qjl1.webp" alt="navegación a imagenes de pokemon" id="imgPokemon"> 
                <h2>Pokemon</h2>
                
                </figure>
            </li>
            <li>
                <figure id="figureHangMan" class="figureDashboard">
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1682956168/hangmangame_zz0dgc.jpg" alt="navegación al juego del ahorcado" id="imgHangMan">
                <h2>HangMan</h2>
                </figure>
            </li>
            <li>
                <figure id="figureWacka" class="figureDashboard">
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683652261/Topo_zhtscf.png" alt="navegación del juego Wacka" id="imgWacka">
                <h2>Wacka</h2>
                </figure>
            </li>
        </ul>
    </div>
`
};

const addListeners = () => {
    const imgPokemon = document.getElementById("imgPokemon");
    imgPokemon.addEventListener("click", () => {
        initControler("Pokemon");
    });
    const imgWacka = document.querySelector("#imgWacka");
    imgWacka.addEventListener("click", () => {
        initControler("Wacka");
    });
    const imgHangMan = document.querySelector("#imgHangMan");
    imgHangMan.addEventListener("click", () => {
        initControler("HangMan");
    });
}

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete();
    addListeners()
}