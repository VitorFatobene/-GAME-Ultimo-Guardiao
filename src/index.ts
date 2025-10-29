import { Classe_Mae } from "./classes/entidades/Classe_Mae";
import { Guerreiro } from "./classes/entidades/Guerreiro";
import { Mago } from "./classes/entidades/Mago";
import { Necromante } from "./classes/entidades/Necromante";

const imagens = document.querySelectorAll<HTMLImageElement>(".imagens")
const botao = document.getElementById("escolher") as HTMLButtonElement
const guerreiro = new Guerreiro("Vitor", 40, 2, 100, 50, "Espada do Deus do Trovão", 8);
const mago = new Mago("maguinho", 30, 20, 65, 40,"Cajado Lendário do dragão", 7);
const necromante = new Necromante("Necromante", 25, 25, 50, 35,"Varinha Do Rei Antigo", 9);
let classeSelecionada: boolean = false;
sessionStorage.setItem("nome", "Vitor")
console.log(guerreiro)
console.log(mago)
console.log(necromante)


imagens.forEach(function (img){
    img.addEventListener("click", function(){
        removerClicada()
        img.classList.add("selecionada")
        classeSelecionada = true;
    })
})

function removerClicada() {
    imagens.forEach(function (i) {
        i.classList.remove("selecionada");
    });
}

botao.addEventListener("click", function(){
    if(classeSelecionada == false){
        alert("Por favor, selecione uma classe")
    }else{
        window.location.href = "/html/combate.html"
    }
})


