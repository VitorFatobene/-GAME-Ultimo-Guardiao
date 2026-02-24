import { Classe_Mae } from "./classes/entidades/Classe_Mae";
import { Guerreiro } from "./classes/entidades/Guerreiro";
import { Mago } from "./classes/entidades/Mago";
import { Necromante } from "./classes/entidades/Necromante";
import { Orc } from "./classes/entidades/Orc";
import { MagoCorrompido } from "./classes/entidades/MagoCorrompido";



const imagens = document.querySelectorAll<HTMLImageElement>(".imagens");
const botao = document.getElementById("escolher") as HTMLButtonElement | null;

let classeSelecionada = false;
let indiceClicado: number | null = null;


const guerreiro = new Guerreiro("Vitor", 40, 2, 100, 50, "Espada do Trovão", 8);
const mago = new Mago("Maguinho", 30, 20, 65, 40, "Cajado Lendário", 7);
const necromante = new Necromante("Necromante", 25, 25, 50, 35, "Varinha Antiga", 9);
const orc = new Orc("Orc Bravo", 40, 10, 50, 20, "Machado Cego");
const magoCorrompido = new MagoCorrompido("Mago Corrompido", 30, 80, 90, 25, "Cajado Sombrio");


const classesJson: Record<string, any> = {
    guerreiro: { ...guerreiro, nivel: 1 },
    mago: { ...mago, nivel: 1 },
    necromante: { ...necromante, nivel: 1 },
};


localStorage.setItem("orc", JSON.stringify({
    nome: orc.getNome(),
    forca: orc.getForca(),
    mana: orc.getMana(),
    vida: orc.getVida(),
    dano: orc.getDano(),
    equipamento: orc.getEquipamento()
}));

localStorage.setItem("magoCorrompido", JSON.stringify({
    nome: magoCorrompido.getNome(),
    forca: magoCorrompido.getForca(),
    mana: magoCorrompido.getMana(),
    vida: magoCorrompido.getVida(),
    dano: magoCorrompido.getDano(),
    equipamento: magoCorrompido.getEquipamento()
}));


function removerClicada() {
    imagens.forEach(img => img.classList.remove("selecionada"));
}

function trocarParaAnimada(img: HTMLImageElement) {
    const animadas: any = {
        "/imagens/guerreiro_novo.png": "/imagens/guerreiro animado.gif",
        "/imagens/mago_fogo.png": "/imagens/mago animado.gif",
        "/imagens/necromante_novo.png": "/imagens/necromante animado.gif"
    };

    const src = img.getAttribute("src");
    if (src && animadas[src]) img.src = animadas[src];
}

function salvarImagemClasse() {
    if (indiceClicado === null) return;

    const img = imagens.item(indiceClicado)!;

    localStorage.setItem("imagemClasse", img.src);
    localStorage.setItem("classeSelecionadaId", img.id);
}

function verificarSeClasseSelecionada() {
    if (!classeSelecionada) {
        alert("Selecione uma classe");
        return;
    }

    const id = imagens.item(indiceClicado!)!.id;

    localStorage.setItem(id, JSON.stringify(classesJson[id]));

    window.location.href = "combate.html";
}

if (imagens.length > 0 && botao) {
    imagens.forEach((img, index) => {
        img.addEventListener("click", () => {
            removerClicada();
            img.classList.add("selecionada");
            trocarParaAnimada(img);
            classeSelecionada = true;
            indiceClicado = index;
        });
    });

    botao.addEventListener("click", () => {
        salvarImagemClasse();
        verificarSeClasseSelecionada();
    });
}



window.addEventListener("DOMContentLoaded", () => {
    const imgClasse = document.getElementById("imagem-classe") as HTMLImageElement | null;
    const imgInimigo = document.getElementById("imagem-inimigo") as HTMLImageElement | null;
    const musicaVitoria = new Audio("/trilha/wining theme song.mp3");
    const trilhaDeFundo = document.getElementById("trilha_de_fundo_combate") as HTMLAudioElement;
    const musicaDerrota = new Audio("/trilha/defeat_song_effect.mp3");
    const ataqueMagico = new Audio("/trilha/ataque necromante.mp3");

    if (!imgClasse || !imgInimigo) return;


    const classeId = localStorage.getItem("classeSelecionadaId")!;
    const classeJson = JSON.parse(localStorage.getItem(classeId)!);

    imgClasse.src = localStorage.getItem("imagemClasse")!;


    let inimigo = JSON.parse(localStorage.getItem("orc")!);

    let vidaJogador = classeJson.vida;
    let vidaInimigo = inimigo.vida;

    const spanVidaJogador = document.getElementById("vida-jogador")!;
    const spanVidaInimigo = document.getElementById("vida-inimigo")!;
    const barraJogador = document.getElementById("barra-vida-jogador")!;
    const barraInimigo = document.getElementById("barra-vida-inimigo")!;
    const painel = document.getElementById("painel-combate")!;
    const btnAtacar = document.getElementById("btn-atacar")!;

    let jogoAcabou = false;
    let fase = 1;

    function atualizarHUD() {
        spanVidaJogador.textContent = vidaJogador.toString();
        spanVidaInimigo.textContent = vidaInimigo.toString();

        barraJogador.style.width = `${(vidaJogador / classeJson.vida) * 100}%`;
        barraInimigo.style.width = `${(vidaInimigo / inimigo.vida) * 100}%`;
    }

    function log(msg: string) {
        const p = document.createElement("p");
        p.textContent = msg;
        painel.appendChild(p);
        painel.scrollTop = painel.scrollHeight;
    }

    atualizarHUD();
    log("Um Orc apareceu!");

    btnAtacar.addEventListener("click", () => {
        if (jogoAcabou) return;
        somAtaqueMagico();
        vidaInimigo -= classeJson.dano;
        if (vidaInimigo < 0) vidaInimigo = 0;
        log(`Você causou ${classeJson.dano} de dano!`);
        atualizarHUD();

        if (vidaInimigo <= 0) {
                tocarMusicaVitoria()
            if (fase === 1) {
                log("Você derrotou o Orc!");
                classeJson.nivel++;
                log(`Você subiu para o nível ${classeJson.nivel}!`);

                localStorage.setItem(classeId, JSON.stringify(classeJson));

               
                fase = 2;
                inimigo = JSON.parse(localStorage.getItem("magoCorrompido")!);
                vidaInimigo = inimigo.vida;

                imgInimigo.src = "/imagens/magoCorrompido certo.png";
                log("Um Mago Corrompido surgiu das trevas!");

                atualizarHUD();
                return;
            }

            if (fase === 2) {
                log("Você derrotou o Mago Corrompido!");
                log("Fim da batalha!");
                jogoAcabou = true;
                return;
            }
        }

        
        vidaJogador -= inimigo.dano;
        if (vidaJogador < 0) vidaJogador = 0;

        log(`${inimigo.nome} causou ${inimigo.dano} de dano em você.`);
        atualizarHUD();

        if (vidaJogador <= 0) {
            log("Você foi derrotado...");
            pararTrilhaDeFundo()
            tocarMusicaDerrota()
            jogoAcabou = true;
        }
    });

      function tocarMusicaVitoria(){
        musicaVitoria.play();
    }

    function pararTrilhaDeFundo(){
        trilhaDeFundo.pause();
    }

    function tocarMusicaDerrota(){
        musicaDerrota.play();
    }

    function somAtaqueMagico(){
        ataqueMagico.play()
    }
});
