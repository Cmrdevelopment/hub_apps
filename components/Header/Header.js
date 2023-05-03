import { initControler } from "../../utils/route";
import "./Header.css";


const templete = () => {
    return /*html*/ `
    <div>
        <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683025870/Games-Center-sin_fondo_f9z9bu.png" alt="icono de la web"/>
        <h1>Hub Games</h1>
    </div>
    <nav>
        <img id= "buttonDashboard" class="navDashboard" src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683039413/Mando_Dashboard_-removebg-preview_ilzorz.png" alt="ir al home"/> 
        <input id="checkitem" type="checkbox" onclick="enableDarkMode()"/>
        <img id= "buttonlogout" class="navLogout" src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683023350/SalirSesi%C3%B3n-removebg-preview_qaroec.png" alt="logout"/>
    </nav>
`
};

const addListeners = () => {
    const buttonDashboard = document.querySelector("#buttonDashboard");
    buttonDashboard.addEventListener("click", () => {
        initControler("Dashboard");
    });
    const buttonlogout = document.querySelector("#buttonlogout");
    buttonlogout.addEventListener("click", () => {
        localStorage.removeItem("user");
        initControler("Login")
        if (!localStorage.getItem("user")) document.querySelector("nav").style.display = "none";
    });    
};

export const printTemplates = () => {
    document.querySelector("header").innerHTML = templete()
    addListeners() 
} 

