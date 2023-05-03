import { initControler } from "../../utils/route";
import "./Login.css";

const templete = () => {
    return /*html*/ `
    <div class="loginContainer">
        <p>Bienvenido</p>
        <input type="text" placeholder="Usuario" id="">
        <button id="buttonLogin">Acceder</button>
    </div>
    `
};

const addListeners = () => {
    const buttonLogin = document.querySelector("#buttonLogin");
    buttonLogin.addEventListener("click", () => {
        const inputLogin = document.querySelector("input");
        localStorage.setItem("user", inputLogin.value);
        if (localStorage.getItem("user")) document.querySelector("nav").style.display = "flex";
        initControler();
    })
};

export const printTemplates = () => {
    if (!localStorage.getItem("user")) document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = templete();
    addListeners();
} 