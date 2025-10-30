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

/***/ "./src/classes/entidades/Necromante.ts":
/*!*********************************************!*\
  !*** ./src/classes/entidades/Necromante.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Necromante: () => (/* binding */ Necromante)\n/* harmony export */ });\n/* harmony import */ var _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classe_Mae.js */ \"./src/classes/entidades/Classe_Mae.js\");\n\nclass Necromante extends _Classe_Mae_js__WEBPACK_IMPORTED_MODULE_0__.Classe_Mae {\n    inteligencia;\n    constructor(nome, forca, mana, vida, dano, equipamento, inteligencia) {\n        super(nome, forca, mana, vida, dano, equipamento);\n        this.inteligencia = inteligencia;\n    }\n    getNome() {\n        return this.nome;\n    }\n    setNome(nome) {\n        this.nome = nome;\n    }\n    getForca() {\n        return this.forca;\n    }\n    setForca(forca) {\n        this.forca = forca;\n    }\n    getMana() {\n        return this.mana;\n    }\n    setMana(mana) {\n        this.mana = mana;\n    }\n    getVida() {\n        return this.vida;\n    }\n    setVida(vida) {\n        this.vida = vida;\n    }\n    getDano() {\n        return this.dano;\n    }\n    setDano(dano) {\n        this.dano = dano;\n    }\n    getEquipamento() {\n        return this.equipamento;\n    }\n    setEquipamento(equipamento) {\n        this.equipamento = equipamento;\n    }\n    toString() {\n        return \"Nome: \" + this.nome + \", Forca: \" + this.forca + \", Mana: \" + this.mana + \", Vida: \" + this.vida + \", Equipamento: \" + this.equipamento + \", Inteligencia: \" + this.inteligencia;\n    }\n    getInteligencia() {\n        return this.inteligencia;\n    }\n    setInteligencia(inteligencia) {\n        this.inteligencia = inteligencia;\n    }\n    calcularDano() {\n        this.dano = this.inteligencia * ((this.inteligencia * 0.1) + (this.mana * 0.1));\n    }\n    atacar() {\n        console.log(\"Necromante atacou com \" + this.equipamento + \" e desferiu \" + this.dano.toFixed(2) +\n            \" de dano\");\n    }\n}\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/classes/entidades/Necromante.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_entidades_Classe_Mae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/entidades/Classe_Mae */ \"./src/classes/entidades/Classe_Mae.ts\");\n/* harmony import */ var _classes_entidades_Guerreiro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/entidades/Guerreiro */ \"./src/classes/entidades/Guerreiro.ts\");\n/* harmony import */ var _classes_entidades_Mago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/entidades/Mago */ \"./src/classes/entidades/Mago.ts\");\n/* harmony import */ var _classes_entidades_Necromante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/entidades/Necromante */ \"./src/classes/entidades/Necromante.ts\");\n\n\n\n\nfunction removerClicada() {\n    imagens.forEach(function (i) {\n        i.classList.remove(\"selecionada\");\n    });\n}\nfunction verificarSeClasseSelecionada() {\n    try {\n        if (classeSelecionada == false) {\n            throw new Error(\"Selecione uma classe\");\n        }\n        if (indiceClicado == 0) {\n            sessionStorage.setItem(\"guerreiro\", JSON.stringify(guerreiroTeste));\n        }\n        else if (indiceClicado == 1) {\n            sessionStorage.setItem(\"mago\", JSON.stringify(magoTeste));\n        }\n        else if (indiceClicado == 2) {\n            sessionStorage.setItem(\"necromante\", JSON.stringify(necromanteTeste));\n        }\n        window.location.href = \"/html/combate.html\";\n    }\n    catch (erro) {\n        alert(erro.message);\n    }\n}\nconst imagens = document.querySelectorAll(\".imagens\");\nconst botao = document.getElementById(\"escolher\");\nlet classeSelecionada = false;\nlet indiceClicado = null;\nconst guerreiro = new _classes_entidades_Guerreiro__WEBPACK_IMPORTED_MODULE_1__.Guerreiro(\"Vitor\", 40, 2, 100, 50, \"Espada do Deus do Trovão\", 8);\nconst mago = new _classes_entidades_Mago__WEBPACK_IMPORTED_MODULE_2__.Mago(\"maguinho\", 30, 20, 65, 40, \"Cajado Lendário do dragão\", 7);\nconst necromante = new _classes_entidades_Necromante__WEBPACK_IMPORTED_MODULE_3__.Necromante(\"Necromante\", 25, 25, 50, 35, \"Varinha Do Rei Antigo\", 9);\nconst magoTeste = {\n    nome: mago.getNome(),\n    forca: mago.getForca(),\n    mana: mago.getMana(),\n    vida: mago.getVida(),\n    dano: mago.getDano(),\n    equipamento: mago.getEquipamento(),\n    inteligencia: mago.getInteligencia(),\n};\nconst guerreiroTeste = {\n    nome: guerreiro.getNome(),\n    forca: guerreiro.getForca(),\n    mana: guerreiro.getMana(),\n    vida: guerreiro.getVida(),\n    dano: guerreiro.getDano(),\n    equipamento: guerreiro.getEquipamento(),\n    inteligencia: guerreiro.getFuria(),\n};\nconst necromanteTeste = {\n    nome: necromante.getNome(),\n    forca: necromante.getForca(),\n    mana: necromante.getMana(),\n    vida: necromante.getVida(),\n    dano: necromante.getDano(),\n    equipamento: necromante.getEquipamento(),\n    inteligencia: necromante.getInteligencia(),\n};\nimagens.forEach(function (img, index) {\n    img.addEventListener(\"click\", function () {\n        removerClicada();\n        img.classList.add(\"selecionada\");\n        classeSelecionada = true;\n        indiceClicado = index;\n    });\n});\nbotao.addEventListener(\"click\", verificarSeClasseSelecionada);\n\n\n//# sourceURL=webpack://jogo_rpg_pi/./src/index.ts?\n}");

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