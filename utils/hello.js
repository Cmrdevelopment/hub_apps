export const helloUser = () => {
    const name =localStorage.getItem("user");
    return name;
}