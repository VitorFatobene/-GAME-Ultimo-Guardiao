import { Classe_Mae } from "./Classe_Mae.js";
export declare class Mago extends Classe_Mae {
    private inteligencia;
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String, inteligencia: number);
    getNome(): String;
    setNome(nome: String): void;
    getForca(): number;
    setForca(forca: number): void;
    getMana(): number;
    setMana(mana: number): void;
    getVida(): number;
    setVida(vida: number): void;
    getDano(): number;
    setDano(dano: number): void;
    getEquipamento(): String;
    setEquipamento(equipamento: String): void;
    toString(): String;
    getInteligencia(): number;
    setInteligencia(inteligencia: number): void;
    calcularDano(): void;
    atacar(): void;
}
//# sourceMappingURL=Mago.d.ts.map