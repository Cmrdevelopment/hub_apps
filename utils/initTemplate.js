import { printTemplates as printHeader} from "../components/Header/Header";

import { printTemplates as printFooter} from "../components/Footer/Footer";

export const initTemplete = ()=> {
    const app = document.querySelector("#app");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    app.append(header, main, footer);
    printHeader()
    printFooter()
    
}


