// Está función es para mantener un tiempo random al topo asomado

export const ramdomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};