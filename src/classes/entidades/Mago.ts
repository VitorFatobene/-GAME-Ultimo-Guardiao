import { Classe_Mae } from "./Classe_Mae.js";
export class Mago extends Classe_Mae{
    private inteligencia: number;

    constructor(nome: String, forca: number, mana: number, vida: number, dano: number,equipamento: String, inteligencia: number){
        super(nome, forca, mana, vida, dano, equipamento);
        this.inteligencia = inteligencia;
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
        return "Nome: " + this.nome + ", Forca: " + this.forca + ", Mana: " + this.mana + ", Vida: " + this.vida + ", Equipamento: " + this.equipamento + ", Inteligencia: " + this.inteligencia;
    }
    

    public getInteligencia(): number{
        return this.inteligencia;
    }
    
    public setInteligencia(inteligencia : number) {
        this.inteligencia = inteligencia;
    }
    //provavelmente terei de fazer o método retornar o dano para que no futuro eu 
    //consiga criar o sistema de batalha onde o heroi vai dar dano no inimigo e a vida do inimigo
    //seja diminuida.
    public calcularDano(): void{
        this.dano = this.inteligencia * ((this.inteligencia * 0.1) + (this.mana * 0.1));
    }

    public atacar(): void {
        console.log("Mago atacou com " + this.equipamento + " e desferiu " + this.dano.toFixed(2) + 
            " de dano");
    }

}