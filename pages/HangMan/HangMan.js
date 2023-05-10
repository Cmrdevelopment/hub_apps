import "./HangMan.css";


const templete = () => /*html*/`
    <section>
    <h2>En estos momentos estamos mejorando el juego, en breve lo tendrás disponible con todas las mejoras disponibles</h2>
    <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683657019/Ahorcado_cerca_axvdhn.png" alt="imagen del juego del ahorcado">
    </section>
`;

const addListeners = () => {

};

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete()
} 