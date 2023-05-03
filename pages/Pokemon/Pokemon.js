import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";

const templete = () => `<div class="galleryPokemon"></div>`;

const dataService = async () => {

    const getData = await dataPokemon();
    getData.map((pokemon)=>{
    const templatefigure = `
        <figure class="figurePokemon">
            <img src=${pokemon.image} alt=${pokemon.name}/>
            <h2>${pokemon.name}</h2>
        </figure>
        `;
        document.querySelector(".galleryPokemon").innerHTML += templatefigure;
    });
};

const addListeners = () => {

};

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete();
    dataService()
} 