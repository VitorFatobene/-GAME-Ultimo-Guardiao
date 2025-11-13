import { Classe_Mae } from "./classes/entidades/Classe_Mae";
import { Guerreiro } from "./classes/entidades/Guerreiro";
import { Mago } from "./classes/entidades/Mago";
import { Necromante } from "./classes/entidades/Necromante";

// ---------------- FUNÇÕES DA TELA DE SELEÇÃO ----------------

const imagens = document.querySelectorAll<HTMLImageElement>(".imagens");
const botao = document.getElementById("escolher") as HTMLButtonElement | null;

let classeSelecionada: boolean = false;
let indiceClicado: number | null = null;

const guerreiro = new Guerreiro("Vitor", 40, 2, 100, 50, "Espada do Deus do Trovão", 8);
const mago = new Mago("maguinho", 30, 20, 65, 40, "Cajado Lendário do dragão", 7);
const necromante = new Necromante("Necromante", 25, 25, 50, 35, "Varinha Do Rei Antigo", 9);

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
    inteligencia: guerreiro.getFuria(), // você já estava usando assim
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

function removerClicada() {
    imagens.forEach(function (i) {
        i.classList.remove("selecionada");
        // Restaura imagem estática ao remover seleção
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

// 🔴 AJUSTADA: agora salva a imagem E o id da classe
function salvarImagemClasse() {
    if (indiceClicado !== null) {
        const imgEl = imagens.item(indiceClicado);
        if (imgEl) {
            const src = imgEl.getAttribute('src') || imgEl.src;
            if (src) {
                sessionStorage.setItem('imagemClasse', src);          // caminho da imagem
                sessionStorage.setItem('classeSelecionadaId', imgEl.id); // "guerreiro" | "mago" | "necromante"
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

// ⚠️ Só adiciona os eventos se estivermos na tela que TEM as imagens e o botão
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
    const statusDiv = document.getElementById("status-classe");

    // Se não tiver #imagem-classe, é outra página, não faz nada:
    if (!imgClasse) return;

    const imgSrc = sessionStorage.getItem("imagemClasse");
    console.log("imagemClasse no combate:", imgSrc);

    if (imgSrc) {
        imgClasse.src = imgSrc;
    } else {
        if (statusDiv) {
            statusDiv.textContent = "Nenhuma classe selecionada. Volte e escolha uma classe.";
        }
        return;
    }

    const classeId = sessionStorage.getItem("classeSelecionadaId");
    console.log("classeSelecionadaId no combate:", classeId);

    if (!classeId || !statusDiv) return;

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

    statusDiv.innerHTML = `
        <h2>${classe.nome}</h2>
        <p>Vida: ${classe.vida}</p>
        <p>Força: ${classe.forca}</p>
        <p>Mana: ${classe.mana}</p>
        <p>Dano: ${classe.dano}</p>
        <p>Equipamento: ${classe.equipamento}</p>
        <p>Atributo especial: ${classe.inteligencia}</p>
    `;
});
