import "./Dashboard.css";


const templete = () => {
    return`
    <div id="containerDashboard">
        <ul>
            <li>
                <figure id="figurePokemon" class="figureDashboard">
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1682955920/pokemon-primera-generacion.1682856451.4993_w1qjl1.webp" alt="navegación a imagenes de pokemon">
                <h2>Pokemon</h2>
                </figure>
            </li>
            <li>
                <figure id="figureHangMan" class="figureDashboard">
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1682956168/hangmangame_zz0dgc.jpg" alt="navegación al juego del ahorcado">
                <h2>HangMan</h2>
                </figure>
            </li>
            <li>
                <figure id="figureQuizPlay" class="figureDashboard">
                <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1682956366/Aplicaciones-de-juegos-de-preguntas-para-aprovechar-el-tiempo-aprendiendo_s9gbhr.webp" alt="navegación al juego de preguntas y respuestas">
                <h2>QuizPlay</h2>
                </figure>
            </li>
        </ul>
    </div>
`
};

const addListeners = () => {

};

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete();
}