import "./Footer.css";


const templete = () => {
    return `
    <p>By Carlos Martín © - 2023 - </p>
    `
};

const addListeners = () => {

};

export const printTemplates = () => {
    document.querySelector("footer").innerHTML = templete()
} 