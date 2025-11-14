import { Classe_Mae } from "./classes/entidades/Classe_Mae";
import { Guerreiro } from "./classes/entidades/Guerreiro";
import { Mago } from "./classes/entidades/Mago";
import { Necromante } from "./classes/entidades/Necromante";
import { Orc } from "./classes/entidades/Orc";



const imagens = document.querySelectorAll<HTMLImageElement>(".imagens");
const botao = document.getElementById("escolher") as HTMLButtonElement | null;

let classeSelecionada: boolean = false;
let indiceClicado: number | null = null;

const guerreiro = new Guerreiro("Vitor", 40, 2, 100, 50, "Espada do Deus do Trovão", 8);
const mago = new Mago("maguinho", 30, 20, 65, 40, "Cajado Lendário do dragão", 7);
const necromante = new Necromante("Necromante", 25, 25, 50, 35, "Varinha Do Rei Antigo", 9);
const orc = new Orc("Orc bravo", 40, 10, 50, 20, "Machado cego")

const magoTeste = {
    nome: mago.getNome(),
    forca: mago.getForca(),
    mana: mago.getMana(),
    vida: mago.getVida(),
    dano: mago.getDano(),
    equipamento: mago.getEquipamento(),
    inteligencia: mago.getInteligencia(),
};

const guerreiroTeste = {
    nome: guerreiro.getNome(),
    forca: guerreiro.getForca(),
    mana: guerreiro.getMana(),
    vida: guerreiro.getVida(),
    dano: guerreiro.getDano(),
    equipamento: guerreiro.getEquipamento(),
    inteligencia: guerreiro.getFuria(),
};
 

const necromanteTeste = {
    nome: necromante.getNome(),
    forca: necromante.getForca(),
    mana: necromante.getMana(),
    vida: necromante.getVida(),
    dano: necromante.getDano(),
    equipamento: necromante.getEquipamento(),
    inteligencia: necromante.getInteligencia(),
};

const orcTeste = {
    nome: orc.getNome(),
    forca: orc.getForca(),
    mana: orc.getMana(),
    vida: orc.getVida(),
    dano: orc.getDano(),
    equipamento: orc.getEquipamento(),
};

sessionStorage.setItem("orc", JSON.stringify(orcTeste));


function removerClicada() {
    imagens.forEach(function (i) {
        i.classList.remove("selecionada");
     
        const src = i.getAttribute('src');
        if (src?.includes('animado')) {
            if (src.includes('guerreiro')) {
                i.src = '/imagens/guerreiro_novo.png';
            } else if (src.includes('mago')) {
                i.src = '/imagens/mago_fogo.png';
            } else if (src.includes('necromante')) {
                i.src = '/imagens/necromante_novo.png';
            }
        }
    });
}

function trocarParaImagemAnimada(img: HTMLImageElement) {
    const imagensAnimadas = {
        '/imagens/guerreiro_novo.png': '/imagens/guerreiro animado.gif',
        '/imagens/mago_fogo.png': '/imagens/mago animado.gif',
        '/imagens/necromante_novo.png': '/imagens/necromante animado.gif'
    };

    const srcAtual = img.getAttribute('src');
    if (srcAtual && srcAtual in imagensAnimadas) {
        img.src = imagensAnimadas[srcAtual as keyof typeof imagensAnimadas];
    }
}


function salvarImagemClasse() {
    if (indiceClicado !== null) {
        const imgEl = imagens.item(indiceClicado);
        if (imgEl) {
            const src = imgEl.getAttribute('src') || imgEl.src;
            if (src) {
                sessionStorage.setItem('imagemClasse', src);         
                sessionStorage.setItem('classeSelecionadaId', imgEl.id); 
                console.log("Salvando imagemClasse:", src);
                console.log("Salvando classeSelecionadaId:", imgEl.id);
            }
        }
    }
}

function verificarSeClasseSelecionada() {
    try {
        if (classeSelecionada == false) {
            throw new Error("Selecione uma classe");
        }

        if (indiceClicado == 0) {
            sessionStorage.setItem("guerreiro", JSON.stringify(guerreiroTeste));
        } else if (indiceClicado == 1) {
            sessionStorage.setItem("mago", JSON.stringify(magoTeste));
        } else if (indiceClicado == 2) {
            sessionStorage.setItem("necromante", JSON.stringify(necromanteTeste));
        }

        window.location.href = 'combate.html';

    } catch (erro) {
        alert((erro as Error).message);
    }
}


if (imagens.length > 0 && botao) {
    imagens.forEach(function (img, index) {
        img.addEventListener("click", function () {
            removerClicada();
            img.classList.add("selecionada");
            classeSelecionada = true;
            indiceClicado = index;
            trocarParaImagemAnimada(img);
        });
    });

    botao.addEventListener("click", function () {
        salvarImagemClasse();
        verificarSeClasseSelecionada();
    });
}

// ---------------- CÓDIGO DA PÁGINA combate.html ----------------

window.addEventListener("DOMContentLoaded", () => {
    const imgClasse = document.getElementById("imagem-classe") as HTMLImageElement | null;

    if (!imgClasse) return;

    const imgSrc = sessionStorage.getItem("imagemClasse");
    console.log("imagemClasse no combate:", imgSrc);

    if (imgSrc) {
        imgClasse.src = imgSrc;
    } else {
        console.warn("Nenhuma classe selecionada. Volte e escolha uma classe.");
        return;
    }

    const classeId = sessionStorage.getItem("classeSelecionadaId");
    console.log("classeSelecionadaId no combate:", classeId);

    if (!classeId) return;

    const dadosRaw = sessionStorage.getItem(classeId);
    console.log("dadosRaw da classe no combate:", dadosRaw);

    if (!dadosRaw) return;

    const classe = JSON.parse(dadosRaw) as {
        nome: string;
        forca: number;
        mana: number;
        vida: number;
        dano: number;
        equipamento: string;
        inteligencia: number;
    };


    const orcRaw = sessionStorage.getItem("orc");
    if (!orcRaw) {
        console.warn("Orc não encontrado no sessionStorage.");
        return;
    }

    const orc = JSON.parse(orcRaw) as {
        nome: string;
        forca: number;
        mana: number;
        vida: number;
        dano: number;
        equipamento: string;
    };

  
    const spanVidaJogadorEl = document.getElementById("vida-jogador");
    const spanVidaOrcEl = document.getElementById("vida-orc");
    const painelCombateEl = document.getElementById("painel-combate");
    const botaoAtacarEl = document.getElementById("btn-atacar");

    if (!spanVidaJogadorEl || !spanVidaOrcEl || !painelCombateEl || !botaoAtacarEl) {
        console.warn("Elementos da interface de combate não encontrados.");
        return;
    }


    const spanVidaJogador = spanVidaJogadorEl as HTMLSpanElement;
    const spanVidaOrc = spanVidaOrcEl as HTMLSpanElement;
    const painelCombate = painelCombateEl as HTMLDivElement;
    const botaoAtacar = botaoAtacarEl as HTMLButtonElement;


    let vidaJogadorAtual = classe.vida;
    let vidaOrcAtual = orc.vida;
    let jogoAcabou = false;

    function atualizarHUD() {
    // Texto numérico
    spanVidaJogador.textContent = vidaJogadorAtual.toString();
    spanVidaOrc.textContent = vidaOrcAtual.toString();

    // Barras gráficas
    const barraJogador = document.getElementById("barra-vida-jogador") as HTMLDivElement;
    const barraOrc = document.getElementById("barra-vida-orc") as HTMLDivElement;

    const pctJogador = (vidaJogadorAtual / classe.vida) * 100;
    const pctOrc = (vidaOrcAtual / orc.vida) * 100;

    barraJogador.style.width = pctJogador + "%";
    barraOrc.style.width = pctOrc + "%";

    if (pctJogador <= 30) barraJogador.classList.add("low-hp");
    else barraJogador.classList.remove("low-hp");

    if (pctOrc <= 30) barraOrc.classList.add("low-hp");
    else barraOrc.classList.remove("low-hp");
}

   
    function logCombate(mensagem: string) {
        console.log(mensagem);
        const p = document.createElement("p");
        p.textContent = mensagem;
        painelCombate.appendChild(p);
        painelCombate.scrollTop = painelCombate.scrollHeight;
    }

   
    atualizarHUD();
    logCombate(`Um ${orc.nome} apareceu! Prepare-se para o combate, ${classe.nome}.`);

    botaoAtacar.addEventListener("click", () => {
        if (jogoAcabou) return;

        const danoJogador = classe.dano;
        vidaOrcAtual -= danoJogador;
        if (vidaOrcAtual < 0) vidaOrcAtual = 0;

        logCombate(`O jogador ${classe.nome} atacou o inimigo e causou ${danoJogador} de dano.`);
        atualizarHUD();

        if (vidaOrcAtual <= 0) {
            logCombate(`O ${orc.nome} foi derrotado! Você venceu o combate!`);
            jogoAcabou = true;
            return;
        }

        // --- Turno do orc ---
        const danoOrc = orc.dano;
        vidaJogadorAtual -= danoOrc;
        if (vidaJogadorAtual < 0) vidaJogadorAtual = 0;

        logCombate(`O ${orc.nome} desferiu ${danoOrc} de dano no jogador ${classe.nome}.`);
        atualizarHUD();

        if (vidaJogadorAtual <= 0) {
            logCombate(`Você foi derrotado pelo ${orc.nome}...`);
            jogoAcabou = true;
            return;
        }
    });
});


