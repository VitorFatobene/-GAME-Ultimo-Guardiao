/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/entidades/Classe_Mae.js":
/*!*********************************************!*\
  !*** ./src/classes/entidades/Classe_Mae.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Classe_Mae = void 0;\nvar Classe_Mae = /** @class */ (function () {\n    function Classe_Mae(nome, forca, mana, vida, dano, equipamento) {\n        this.nome = nome;\n        this.forca = forca;\n        this.mana = mana;\n        this.vida = vida;\n        this.dano = dano;\n        this.equipamento = equipamento;\n    }\n    return Classe_Mae;\n}());\nexports.Classe_Mae = Classe_Mae;\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Classe_Mae.js?\n}");

/***/ }),

/***/ "./src/classes/entidades/Classe_Mae.ts":
/*!*********************************************!*\
  !*** ./src/classes/entidades/Classe_Mae.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Classe_Mae: () => (/* binding */ Classe_Mae)\n/* harmony export */ });\nclass Classe_Mae {\n    nome;\n    forca;\n    mana;\n    vida;\n    dano;\n    equipamento;\n    constructor(nome, forca, mana, vida, dano, equipamento) {\n        this.nome = nome;\n        this.forca = forca;\n        this.mana = mana;\n        this.vida = vida;\n        this.dano = dano;\n        this.equipamento = equipamento;\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Classe_Mae.ts?\n}");

/***/ }),

/***/ "./src/classes/entidades/Guerreiro.ts":
/*!********************************************!*\
  !*** ./src/classes/entidades/Guerreiro.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Guerreiro: () => (/* binding */ Guerreiro)\n/* harmony export */ });\n/* harmony import */ var _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classe_Mae.js */ \"./src/classes/entidades/Classe_Mae.js\");\n\nclass Guerreiro extends _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__.Classe_Mae {\n    furia;\n    constructor(nome, forca, mana, vida, dano, equipamento, furia) {\n        super(nome, forca, mana, vida, dano, equipamento);\n        this.furia = furia;\n    }\n    getNome() {\n        return this.nome;\n    }\n    setNome(nome) {\n        this.nome = nome;\n    }\n    getForca() {\n        return this.forca;\n    }\n    setForca(forca) {\n        this.forca = forca;\n    }\n    getMana() {\n        return this.mana;\n    }\n    setMana(mana) {\n        this.mana = mana;\n    }\n    getVida() {\n        return this.vida;\n    }\n    setVida(vida) {\n        this.vida = vida;\n    }\n    getDano() {\n        return this.dano;\n    }\n    setDano(dano) {\n        this.dano = dano;\n    }\n    getEquipamento() {\n        return this.equipamento;\n    }\n    setEquipamento(equipamento) {\n        this.equipamento = equipamento;\n    }\n    setFuria(furia) {\n        this.furia = furia;\n    }\n    getFuria() {\n        return this.furia;\n    }\n    toString() {\n        return \"Nome: \" + this.nome + \", Forca: \" + this.forca + \", Mana: \" + this.mana + \", Vida: \" + this.vida + \", Equipamento: \" + this.equipamento + \", Furia: \" + this.furia;\n    }\n    calcularDano() {\n        this.dano = this.forca * (this.furia * 0.1 + this.mana);\n    }\n    atacar() {\n        console.log(\"Guerreiro atacou com \" + this.equipamento + \" e desferiu \" + this.dano.toFixed(2) +\n            \" de dano\");\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Guerreiro.ts?\n}");

/***/ }),

/***/ "./src/classes/entidades/Mago.ts":
/*!***************************************!*\
  !*** ./src/classes/entidades/Mago.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mago: () => (/* binding */ Mago)\n/* harmony export */ });\n/* harmony import */ var _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classe_Mae.js */ \"./src/classes/entidades/Classe_Mae.js\");\n\nclass Mago extends _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__.Classe_Mae {\n    inteligencia;\n    constructor(nome, forca, mana, vida, dano, equipamento, inteligencia) {\n        super(nome, forca, mana, vida, dano, equipamento);\n        this.inteligencia = inteligencia;\n    }\n    getNome() {\n        return this.nome;\n    }\n    setNome(nome) {\n        this.nome = nome;\n    }\n    getForca() {\n        return this.forca;\n    }\n    setForca(forca) {\n        this.forca = forca;\n    }\n    getMana() {\n        return this.mana;\n    }\n    setMana(mana) {\n        this.mana = mana;\n    }\n    getVida() {\n        return this.vida;\n    }\n    setVida(vida) {\n        this.vida = vida;\n    }\n    getDano() {\n        return this.dano;\n    }\n    setDano(dano) {\n        this.dano = dano;\n    }\n    getEquipamento() {\n        return this.equipamento;\n    }\n    setEquipamento(equipamento) {\n        this.equipamento = equipamento;\n    }\n    toString() {\n        return \"Nome: \" + this.nome + \", Forca: \" + this.forca + \", Mana: \" + this.mana + \", Vida: \" + this.vida + \", Equipamento: \" + this.equipamento + \", Inteligencia: \" + this.inteligencia;\n    }\n    getInteligencia() {\n        return this.inteligencia;\n    }\n    setInteligencia(inteligencia) {\n        this.inteligencia = inteligencia;\n    }\n    //provavelmente terei de fazer o método retornar o dano para que no futuro eu \n    //consiga criar o sistema de batalha onde o heroi vai dar dano no inimigo e a vida do inimigo\n    //seja diminuida.\n    calcularDano() {\n        this.dano = this.inteligencia * ((this.inteligencia * 0.1) + (this.mana * 0.1));\n    }\n    atacar() {\n        console.log(\"Mago atacou com \" + this.equipamento + \" e desferiu \" + this.dano.toFixed(2) +\n            \" de dano\");\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Mago.ts?\n}");

/***/ }),

/***/ "./src/classes/entidades/MagoCorrompido.ts":
/*!*************************************************!*\
  !*** ./src/classes/entidades/MagoCorrompido.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MagoCorrompido: () => (/* binding */ MagoCorrompido)\n/* harmony export */ });\n/* harmony import */ var _Classe_Mae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classe_Mae */ \"./src/classes/entidades/Classe_Mae.ts\");\n\nclass MagoCorrompido extends _Classe_Mae__WEBPACK_IMPORTED_MODULE_0__.Classe_Mae {\n    constructor(nome, forca, mana, vida, dano, equipamento) {\n        super(nome, forca, mana, vida, dano, equipamento);\n    }\n    getNome() { return this.nome; }\n    setNome(nome) { this.nome = nome; }\n    getForca() { return this.forca; }\n    setForca(f) { this.forca = f; }\n    getMana() { return this.mana; }\n    setMana(m) { this.mana = m; }\n    getVida() { return this.vida; }\n    setVida(v) { this.vida = v; }\n    getDano() { return this.dano; }\n    setDano(d) { this.dano = d; }\n    getEquipamento() { return this.equipamento; }\n    setEquipamento(eq) { this.equipamento = eq; }\n    atacar() {\n        console.log(`${this.nome} lançou uma magia sombria!`);\n    }\n    calcularDano() {\n        const danoFinal = this.dano + this.forca * 0.5 + this.mana * 0.3;\n        return Math.floor(danoFinal);\n    }\n    toString() {\n        return `\r\n            ${this.nome}\r\n            Vida: ${this.vida}\r\n            Mana: ${this.mana}\r\n            Força: ${this.forca}\r\n            Dano Base: ${this.dano}\r\n            Equipamento: ${this.equipamento}\r\n        `;\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/MagoCorrompido.ts?\n}");

/***/ }),

/***/ "./src/classes/entidades/Necromante.ts":
/*!*********************************************!*\
  !*** ./src/classes/entidades/Necromante.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Necromante: () => (/* binding */ Necromante)\n/* harmony export */ });\n/* harmony import */ var _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classe_Mae.js */ \"./src/classes/entidades/Classe_Mae.js\");\n\nclass Necromante extends _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__.Classe_Mae {\n    inteligencia;\n    constructor(nome, forca, mana, vida, dano, equipamento, inteligencia) {\n        super(nome, forca, mana, vida, dano, equipamento);\n        this.inteligencia = inteligencia;\n    }\n    getNome() {\n        return this.nome;\n    }\n    setNome(nome) {\n        this.nome = nome;\n    }\n    getForca() {\n        return this.forca;\n    }\n    setForca(forca) {\n        this.forca = forca;\n    }\n    getMana() {\n        return this.mana;\n    }\n    setMana(mana) {\n        this.mana = mana;\n    }\n    getVida() {\n        return this.vida;\n    }\n    setVida(vida) {\n        this.vida = vida;\n    }\n    getDano() {\n        return this.dano;\n    }\n    setDano(dano) {\n        this.dano = dano;\n    }\n    getEquipamento() {\n        return this.equipamento;\n    }\n    setEquipamento(equipamento) {\n        this.equipamento = equipamento;\n    }\n    toString() {\n        return \"Nome: \" + this.nome + \", Forca: \" + this.forca + \", Mana: \" + this.mana + \", Vida: \" + this.vida + \", Equipamento: \" + this.equipamento + \", Inteligencia: \" + this.inteligencia;\n    }\n    getInteligencia() {\n        return this.inteligencia;\n    }\n    setInteligencia(inteligencia) {\n        this.inteligencia = inteligencia;\n    }\n    calcularDano() {\n        this.dano = this.inteligencia * ((this.inteligencia * 0.1) + (this.mana * 0.1));\n    }\n    atacar() {\n        console.log(\"Necromante atacou com \" + this.equipamento + \" e desferiu \" + this.dano.toFixed(2) +\n            \" de dano\");\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Necromante.ts?\n}");

/***/ }),

/***/ "./src/classes/entidades/Orc.ts":
/*!**************************************!*\
  !*** ./src/classes/entidades/Orc.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Orc: () => (/* binding */ Orc)\n/* harmony export */ });\n/* harmony import */ var _Classe_Mae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classe_Mae */ \"./src/classes/entidades/Classe_Mae.ts\");\n\nclass Orc extends _Classe_Mae__WEBPACK_IMPORTED_MODULE_0__.Classe_Mae {\n    constructor(nome, forca, mana, vida, dano, equipamento) {\n        super(nome, forca, mana, vida, dano, equipamento);\n    }\n    getNome() {\n        return this.nome;\n    }\n    setNome(nome) {\n        this.nome = nome;\n    }\n    getForca() {\n        return this.forca;\n    }\n    setForca(forca) {\n        this.forca = forca;\n    }\n    getMana() {\n        return this.mana;\n    }\n    setMana(mana) {\n        this.mana = mana;\n    }\n    getVida() {\n        return this.vida;\n    }\n    setVida(vida) {\n        this.vida = vida;\n    }\n    getDano() {\n        return this.dano;\n    }\n    setDano(dano) {\n        this.dano = dano;\n    }\n    getEquipamento() {\n        return this.equipamento;\n    }\n    setEquipamento(equipamento) {\n        this.equipamento = equipamento;\n    }\n    toString() {\n        return \"Nome: \" + this.nome + \", Forca: \" + this.forca + \", Mana: \" + this.mana + \", Vida: \" + this.vida + \", Equipamento: \" + this.equipamento;\n    }\n    calcularDano() {\n        this.dano = 1 * (+(this.mana * 0.1));\n    }\n    atacar() {\n        console.log(\"Orc atacou com \" + this.equipamento + \" e desferiu \" + this.dano.toFixed(2) +\n            \" de dano\");\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Orc.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_entidades_Classe_Mae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/entidades/Classe_Mae */ \"./src/classes/entidades/Classe_Mae.ts\");\n/* harmony import */ var _classes_entidades_Guerreiro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/entidades/Guerreiro */ \"./src/classes/entidades/Guerreiro.ts\");\n/* harmony import */ var _classes_entidades_Mago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/entidades/Mago */ \"./src/classes/entidades/Mago.ts\");\n/* harmony import */ var _classes_entidades_Necromante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/entidades/Necromante */ \"./src/classes/entidades/Necromante.ts\");\n/* harmony import */ var _classes_entidades_Orc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/entidades/Orc */ \"./src/classes/entidades/Orc.ts\");\n/* harmony import */ var _classes_entidades_MagoCorrompido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/entidades/MagoCorrompido */ \"./src/classes/entidades/MagoCorrompido.ts\");\n\n\n\n\n\n\n// ---------------- SELEÇÃO DE CLASSES ----------------\nconst imagens = document.querySelectorAll(\".imagens\");\nconst botao = document.getElementById(\"escolher\");\nlet classeSelecionada = false;\nlet indiceClicado = null;\nconst guerreiro = new _classes_entidades_Guerreiro__WEBPACK_IMPORTED_MODULE_1__.Guerreiro(\"Vitor\", 40, 2, 100, 50, \"Espada do Trovão\", 8);\nconst mago = new _classes_entidades_Mago__WEBPACK_IMPORTED_MODULE_2__.Mago(\"Maguinho\", 30, 20, 65, 40, \"Cajado Lendário\", 7);\nconst necromante = new _classes_entidades_Necromante__WEBPACK_IMPORTED_MODULE_3__.Necromante(\"Necromante\", 25, 25, 50, 35, \"Varinha Antiga\", 9);\nconst orc = new _classes_entidades_Orc__WEBPACK_IMPORTED_MODULE_4__.Orc(\"Orc Bravo\", 40, 10, 50, 20, \"Machado Cego\");\nconst magoCorrompido = new _classes_entidades_MagoCorrompido__WEBPACK_IMPORTED_MODULE_5__.MagoCorrompido(\"Mago Corrompido\", 30, 80, 90, 25, \"Cajado Sombrio\");\nconst classesJson = {\n    guerreiro: { ...guerreiro, nivel: 1 },\n    mago: { ...mago, nivel: 1 },\n    necromante: { ...necromante, nivel: 1 },\n};\nlocalStorage.setItem(\"orc\", JSON.stringify({\n    nome: orc.getNome(),\n    forca: orc.getForca(),\n    mana: orc.getMana(),\n    vida: orc.getVida(),\n    dano: orc.getDano(),\n    equipamento: orc.getEquipamento()\n}));\nlocalStorage.setItem(\"magoCorrompido\", JSON.stringify({\n    nome: magoCorrompido.getNome(),\n    forca: magoCorrompido.getForca(),\n    mana: magoCorrompido.getMana(),\n    vida: magoCorrompido.getVida(),\n    dano: magoCorrompido.getDano(),\n    equipamento: magoCorrompido.getEquipamento()\n}));\nfunction removerClicada() {\n    imagens.forEach(img => img.classList.remove(\"selecionada\"));\n}\nfunction trocarParaAnimada(img) {\n    const animadas = {\n        \"/imagens/guerreiro_novo.png\": \"/imagens/guerreiro animado.gif\",\n        \"/imagens/mago_fogo.png\": \"/imagens/mago animado.gif\",\n        \"/imagens/necromante_novo.png\": \"/imagens/necromante animado.gif\"\n    };\n    const src = img.getAttribute(\"src\");\n    if (src && animadas[src])\n        img.src = animadas[src];\n}\nfunction salvarImagemClasse() {\n    if (indiceClicado === null)\n        return;\n    const img = imagens.item(indiceClicado);\n    localStorage.setItem(\"imagemClasse\", img.src);\n    localStorage.setItem(\"classeSelecionadaId\", img.id);\n}\nfunction verificarSeClasseSelecionada() {\n    if (!classeSelecionada) {\n        alert(\"Selecione uma classe\");\n        return;\n    }\n    const id = imagens.item(indiceClicado).id;\n    localStorage.setItem(id, JSON.stringify(classesJson[id]));\n    window.location.href = \"combate.html\";\n}\nif (imagens.length > 0 && botao) {\n    imagens.forEach((img, index) => {\n        img.addEventListener(\"click\", () => {\n            removerClicada();\n            img.classList.add(\"selecionada\");\n            trocarParaAnimada(img);\n            classeSelecionada = true;\n            indiceClicado = index;\n        });\n    });\n    botao.addEventListener(\"click\", () => {\n        salvarImagemClasse();\n        verificarSeClasseSelecionada();\n    });\n}\n// ---------------- TELA DE COMBATE ----------------\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    const imgClasse = document.getElementById(\"imagem-classe\");\n    const imgInimigo = document.getElementById(\"imagem-inimigo\");\n    const musicaVitoria = new Audio(\"/trilha/wining theme song.mp3\");\n    const trilhaDeFundo = document.getElementById(\"trilha_de_fundo_combate\");\n    const musicaDerrota = new Audio(\"/trilha/defeat_song_effect.mp3\");\n    const ataqueMagico = new Audio(\"/trilha/ataque necromante.mp3\");\n    if (!imgClasse || !imgInimigo)\n        return;\n    const classeId = localStorage.getItem(\"classeSelecionadaId\");\n    const classeJson = JSON.parse(localStorage.getItem(classeId));\n    imgClasse.src = localStorage.getItem(\"imagemClasse\");\n    let inimigo = JSON.parse(localStorage.getItem(\"orc\"));\n    let vidaJogador = classeJson.vida;\n    let vidaInimigo = inimigo.vida;\n    const spanVidaJogador = document.getElementById(\"vida-jogador\");\n    const spanVidaInimigo = document.getElementById(\"vida-inimigo\");\n    const barraJogador = document.getElementById(\"barra-vida-jogador\");\n    const barraInimigo = document.getElementById(\"barra-vida-inimigo\");\n    const painel = document.getElementById(\"painel-combate\");\n    const btnAtacar = document.getElementById(\"btn-atacar\");\n    let jogoAcabou = false;\n    let fase = 1;\n    function atualizarHUD() {\n        spanVidaJogador.textContent = vidaJogador.toString();\n        spanVidaInimigo.textContent = vidaInimigo.toString();\n        barraJogador.style.width = `${(vidaJogador / classeJson.vida) * 100}%`;\n        barraInimigo.style.width = `${(vidaInimigo / inimigo.vida) * 100}%`;\n    }\n    function log(msg) {\n        const p = document.createElement(\"p\");\n        p.textContent = msg;\n        painel.appendChild(p);\n        painel.scrollTop = painel.scrollHeight;\n    }\n    atualizarHUD();\n    log(\"Um Orc apareceu!\");\n    btnAtacar.addEventListener(\"click\", () => {\n        if (jogoAcabou)\n            return;\n        somAtaqueMagico();\n        vidaInimigo -= classeJson.dano;\n        if (vidaInimigo < 0)\n            vidaInimigo = 0;\n        log(`Você causou ${classeJson.dano} de dano!`);\n        atualizarHUD();\n        if (vidaInimigo <= 0) {\n            tocarMusicaVitoria();\n            if (fase === 1) {\n                log(\"Você derrotou o Orc!\");\n                classeJson.nivel++;\n                log(`Você subiu para o nível ${classeJson.nivel}!`);\n                localStorage.setItem(classeId, JSON.stringify(classeJson));\n                fase = 2;\n                inimigo = JSON.parse(localStorage.getItem(\"magoCorrompido\"));\n                vidaInimigo = inimigo.vida;\n                imgInimigo.src = \"/imagens/magoCorrompido certo.png\";\n                log(\"Um Mago Corrompido surgiu das trevas!\");\n                atualizarHUD();\n                return;\n            }\n            if (fase === 2) {\n                log(\"Você derrotou o Mago Corrompido!\");\n                log(\"Fim da batalha!\");\n                jogoAcabou = true;\n                return;\n            }\n        }\n        vidaJogador -= inimigo.dano;\n        if (vidaJogador < 0)\n            vidaJogador = 0;\n        log(`${inimigo.nome} causou ${inimigo.dano} de dano em você.`);\n        atualizarHUD();\n        if (vidaJogador <= 0) {\n            log(\"Você foi derrotado...\");\n            pararTrilhaDeFundo();\n            tocarMusicaDerrota();\n            jogoAcabou = true;\n        }\n    });\n    function tocarMusicaVitoria() {\n        musicaVitoria.play();\n    }\n    function pararTrilhaDeFundo() {\n        trilhaDeFundo.pause();\n    }\n    function tocarMusicaDerrota() {\n        musicaDerrota.play();\n    }\n    function somAtaqueMagico() {\n        ataqueMagico.play();\n    }\n});\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;