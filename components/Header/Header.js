import "./Header.css";


const templete = () => {
    return /*html*/ `
    <div>
        <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683025870/Games-Center-sin_fondo_f9z9bu.png" alt="icono de la web"/>
        <h1>Hub Games</h1>
    </div>
    <nav>
        <button id="buttonHome">Home</button>
        <input id="checkitem" type="checkbox" onclick="enableDarkMode()"/>
        <img src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683023350/SalirSesi%C3%B3n-removebg-preview_qaroec.png" alt="logout"/>
    </nav>
`
};

const addListeners = () => {

};

export const printTemplates = () => {
    document.querySelector("header").innerHTML = templete() 
} 

