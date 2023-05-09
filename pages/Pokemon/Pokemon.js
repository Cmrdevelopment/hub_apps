import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";


let dataServicePokemon
const templete = () => /*html*/ `
    <div id="pokemon">
        <p>Buscar Pokemon</p>
        <input type="text" id="inputPokemon"/>
    <div class="galleryPokemon"></div>  
    </div>`;

const dataService = async () => {
    const getData = await dataPokemon();
    dataServicePokemon = getData
    createAndPrintFigure(dataServicePokemon)
};

const createAndPrintFigure =(data)=> {
    document.querySelector(".galleryPokemon").innerHTML = "";
    data.map((pokemon)=>{
        const templatefigure = `
            <figure class="figurePokemon">
                <img src=${pokemon.image} alt=${pokemon.name}/>
                <h2>${pokemon.name}</h2>
            </figure>
        `;
        document.querySelector(".galleryPokemon").innerHTML += templatefigure;
    });
}

const addListeners = () => {
    const inputPokemon = document.getElementById("inputPokemon");
    inputPokemon.addEventListener("input", (e)=> {
        filterPokemon (e.target.value)
    })
};

const filterPokemon = (valueInput)=> {
    const filterData = dataServicePokemon.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(valueInput.toLowerCase())
    );
    createAndPrintFigure(filterData)
}

export const printTemplates = () => {
    document.querySelector("main").innerHTML = templete();
    dataService()
    addListeners()
} 