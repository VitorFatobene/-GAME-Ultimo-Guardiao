import {Classe_Mae} from "./Classe_Mae";
export class Orc extends Classe_Mae{
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String){
        super(nome, forca, mana, vida, dano, equipamento);
    }

    public getNome(): String{
        return this.nome;
    }

    public setNome(nome: String): void{
        this.nome = nome;
    }
    public getForca(): number{
        return this.forca;
    }

    public setForca(forca : number): void{
        this.forca = forca;
    }

    public getMana() : number{
        return this.mana;
    }              

    public setMana(mana : number): void{
        this.mana = mana;
    }   

    public getVida() : number{
        return this.vida;
    }

    public setVida(vida : number): void{
        this.vida = vida;
    }

    public getDano(): number {
        return this.dano
    }
    public setDano(dano: number): void {
        this.dano = dano;
    }

    public getEquipamento() : String{
        return this.equipamento;
    }

    public setEquipamento(equipamento : String): void{
        this.equipamento = equipamento;
    }
    
    public toString(): String{
        return "Nome: " + this.nome + ", Forca: " + this.forca + ", Mana: " + this.mana + ", Vida: " + this.vida + ", Equipamento: " + this.equipamento;
    }
    
    public calcularDano(): void{
        this.dano = 1 * ( + (this.mana * 0.1));
    }

    public atacar(): void {
        console.log("Orc atacou com " + this.equipamento + " e desferiu " + this.dano.toFixed(2) +
            " de dano");
    }
}