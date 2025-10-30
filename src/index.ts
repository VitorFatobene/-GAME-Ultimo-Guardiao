import { Classe_Mae } from "./classes/entidades/Classe_Mae";
import { Guerreiro } from "./classes/entidades/Guerreiro";
import { Mago } from "./classes/entidades/Mago";
import { Necromante } from "./classes/entidades/Necromante";

function removerClicada() {
    imagens.forEach(function (i) {
        i.classList.remove("selecionada");
    });
}

function verificarClasse(){
    try{
        if(classeSelecionada == false){
            throw new Error("Selecione uma classe")
        }
        window.location.href = "/html/combate.html"
    }catch(erro){
        alert((erro as Error).message)
    }
}

const imagens = document.querySelectorAll<HTMLImageElement>(".imagens")
const botao = document.getElementById("escolher") as HTMLButtonElement
let classeSelecionada: boolean = false;
const guerreiro = new Guerreiro("Vitor", 40, 2, 100, 50, "Espada do Deus do Trovão", 8);
const mago = new Mago("maguinho", 30, 20, 65, 40,"Cajado Lendário do dragão", 7);
const necromante = new Necromante("Necromante", 25, 25, 50, 35,"Varinha Do Rei Antigo", 9);
const magoTeste = {
    nome: mago.getNome(),
    forca: mago.getForca(),
    mana: mago.getMana(),
    vida: mago.getVida(),
    dano: mago.getDano(),
    equipamento: mago.getEquipamento(),
    inteligencia: mago.getInteligencia(),
};

localStorage.setItem("classeEscolhida", JSON.stringify(magoTeste));

imagens.forEach(function (img){
    img.addEventListener("click", function(){
        removerClicada()
        img.classList.add("selecionada")
        classeSelecionada = true;
    })
})

botao.addEventListener("click", verificarClasse)



