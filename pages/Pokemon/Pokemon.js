import { Loading } from "../../components/Loading/loading";
import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";

//? ------------------ TEMPLATE GENERAL ---------------------------

//! Creamos una variable local para que tengan acceso todas las funciones con los datos del service

let dataServicePokemon
const templete = () => /*html*/ `
    <div id="pokemon">
        <p>Buscar Pokemon</p>
        <input type="text" placeholder="Pikachu" id="inputPokemon"/>
    <div class="galleryPokemon"></div>
    <div class="spinner"></div>  
    </div>`;

//? --------- SERVICE , EVENTOS Y PINTADO DE FIGURES----------------

//! en el data service llamamos al servicio y creamos las figure que luego se pintaran

const dataService = async () => {
    document.querySelector(".spinner").innerHTML = Loading();
    const getData = await dataPokemon();
    dataServicePokemon = getData
    document.querySelector(".spinner").innerHTML = "";
    createAndPrintFigure(dataServicePokemon)
};

//? -------> FUNCION GENERAL QUE NOS VA A SERVIR PARA PINTAR TANTO LOS POKEMON DEL FILTER COMO LOS DE LA DATA GENERAL

const createAndPrintFigure =(data)=> {
    document.querySelector(".galleryPokemon").innerHTML = "";
    data.map((pokemon)=>{
        const classCustumType =`"figurePokemon ${pokemon.type[0].type.name}"`
        const templatefigure = `
            <figure class=${classCustumType}>
                <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
                <h2>${pokemon.name}</h2>
                <p>Id: ${pokemon.id}</p>
                <p>Peso: ${pokemon.weight} kg</p>
                <p>Altura: ${pokemon.height} cm</p>
                <p>Tipo: ${pokemon.type[0].type.name}</p>
                
            </figure>
        `;
        document.querySelector(".galleryPokemon").innerHTML += templatefigure;
    });
}

//?--------------- EVENTOS DE LOS ELEMENTOS HTML -------------------
//! --> Añadimos los escuchadores de eventos

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