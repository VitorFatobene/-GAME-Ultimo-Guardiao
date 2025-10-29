import {Classe_Mae} from "./Classe_Mae.js";
export class Guerreiro extends Classe_Mae{
    private furia: number;
    
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String, furia: number){
        super(nome, forca, mana, vida, dano, equipamento)
        this.furia = furia
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

    public setFuria(furia : number): void{
        this.furia = furia;
    }
    
    public getFuria() : number {
        return this.furia;
    }
    
    public toString(): String{
        return "Nome: " + this.nome + ", Forca: " + this.forca + ", Mana: " + this.mana + ", Vida: " + this.vida + ", Equipamento: " + this.equipamento + ", Furia: " + this.furia;
    }

    public calcularDano(): void{
        this.dano = this.forca * (this.furia * 0.1 + this.mana);
    }

    public atacar(): void{
        console.log("Guerreiro atacou com " + this.equipamento + " e desferiu " + this.dano.toFixed(2) +
            " de dano");
    }
    
}