
import { printTemplates as Pokemon} from '../pages/Pokemon/Pokemon';
import { printTemplates as Dashboard } from '../pages/Dashboard/Dashboard';
import { printTemplates as HangMan} from '../pages/HangMan/HangMan';
import { printTemplates as Login} from '../pages/Login/Login';
import { printTemplates as QuizPlay} from '../pages/QuizPlay/QuizPlay';


export const initControler = (route) => {

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