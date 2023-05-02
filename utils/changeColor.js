// función para pasar de modo claro a modo oscuro

export const enableDarkMode =() => {
    let main_body = document.body;
    return main_body.classList.toggle("dark-mode");
}
