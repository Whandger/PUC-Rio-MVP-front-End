//##################################
//###   FUNÇÕES DO MENU RAPIDO   ###
//##################################

document.addEventListener('DOMContentLoaded', function() {

    const modalTreino = document.getElementById("modalTreinos");
    const botaoTreino = document.getElementById("treinoBotao");
    const inicioBotao = document.getElementById("inicioBotao");

    botaoTreino.addEventListener("click", function () {


        const isVisible = window.getComputedStyle(modalTreino).display !== "none";
        
        if (isVisible) {
            botaoTreino.style.backgroundColor = "#41a1eb"
            inicioBotao.style.backgroundColor = "inherit"
            modalTreino.style.display = "flex";
        } else {
            botaoTreino.style.backgroundColor = "#41a1eb"
            inicioBotao.style.backgroundColor = "inherit"
            modalTreino.style.display = "flex";
        }

    });

    inicioBotao.addEventListener("click", function () {
        const isVisible = window.getComputedStyle(modalTreino).display !== "none";
        
        if (isVisible) {
            modalTreino.style.display = "none";
            inicioBotao.style.backgroundColor = "#41a1eb"
            botaoTreino.style.backgroundColor = "inherit"
        } else {
            return
        }
});})