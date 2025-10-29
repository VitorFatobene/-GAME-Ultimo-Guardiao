"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Classe_Mae_js_1 = require("./Classe_Mae.js");
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome, forca, mana, vida, dano, equipamento, furia) {
        var _this = _super.call(this, nome, forca, mana, vida, vida, equipamento) || this;
        _this.furia = furia;
        return _this;
    }
    Guerreiro.prototype.getNome = function () {
        return this.nome;
    };
    Guerreiro.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Guerreiro.prototype.getForca = function () {
        return this.forca;
    };
    Guerreiro.prototype.setForca = function (forca) {
        this.forca = forca;
    };
    Guerreiro.prototype.getMana = function () {
        return this.mana;
    };
    Guerreiro.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Guerreiro.prototype.getVida = function () {
        return this.vida;
    };
    Guerreiro.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Guerreiro.prototype.getDano = function () {
        return this.dano;
    };
    Guerreiro.prototype.setDano = function (dano) {
        this.dano = dano;
    };
    Guerreiro.prototype.getEquipamento = function () {
        return this.equipamento;
    };
    Guerreiro.prototype.setEquipamento = function (equipamento) {
        this.equipamento = equipamento;
    };
    Guerreiro.prototype.setFuria = function (furia) {
        this.furia = furia;
    };
    Guerreiro.prototype.getFuria = function () {
        return this.furia;
    };
    Guerreiro.prototype.toString = function () {
        return "Nome: " + this.nome + ", Forca: " + this.forca + ", Mana: " + this.mana + ", Vida: " + this.vida + ", Equipamento: " + this.equipamento + ", Furia: " + this.furia;
    };
    Guerreiro.prototype.calcularDano = function () {
        this.dano = this.forca * (this.furia * 0.1 + this.mana);
    };
    Guerreiro.prototype.atacar = function () {
        console.log("Guerreiro atacou com " + this.equipamento + " e desferiu " + this.dano.toFixed(2) +
            " de dano");
    };
    return Guerreiro;
}(Classe_Mae_js_1.Classe_Mae));
exports.Guerreiro = Guerreiro;
