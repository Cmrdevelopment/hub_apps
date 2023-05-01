import './style.css';
import { printTemplates as Pokemon} from './pages/Pokemon/Pokemon';
import { printTemplates as Dashboard } from './pages/Dashboard/Dashboard';
import { printTemplates as HangMan} from './pages/HangMan/HangMan';
import { printTemplates as Login} from './pages/Login/Login';
import { printTemplates as QuizPlay} from './pages/QuizPlay/QuizPlay';

const app = document.querySelector("#app");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

app.append(header, main, footer);

export const initContent = (route) => {

    switch (route) {
        case undefined:
            localStorage.getItem("user") ? Dashboard() : Login() 
            break;
        case "Pokemon":
            Pokemon();
            break;
        case "HangMan":
            HangMan();
            break;
        case "QuizPlay":
            QuizPlay();
            break;
        case "Login":
            Login();
            break;
        case "Dashboard":
            Dashboard();
            break;
    
        default:
            break;
    }
};

initContent();


