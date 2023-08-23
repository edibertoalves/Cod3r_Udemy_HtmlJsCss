const texto = "componente texto usando o webpack";

export default (() => {
    const elemento = document.createElement('h3');

    elemento.innerHTML = texto;

    return elemento

})