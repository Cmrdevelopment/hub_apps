import { initControler } from "../../main";
import "./Login.css";

const templete = () => {
    return /*html*/ `
    <input type="text" name="" id="">
    <button id="buttonlogin">Login</button>
    `
};


const addListeners = () => {
    const buttonlogin = document.querySelector("#buttonlogin");
    buttonlogin.addEventListener("click", () => {
        const inputLogin = document.querySelector("input");
        localStorage.setItem("user", inputLogin.value);
        if (localStorage.getItem("user")) document.querySelector("nav").style.display = "block";
        initControler();

    })

};

export const printTemplates = () => {
    if (!localStorage.getItem("user")) document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = templete();
    addListeners();
} 