
export const typePokemon = (data) => {
    const nameTypeReapet = []
    data.foreach((elemnt, index) => {
        elemnt.type.foreach((singleType.type.name) && nameTypeReapet.push(singleType.type.name));
    });
    return nameTypeReapet;
}