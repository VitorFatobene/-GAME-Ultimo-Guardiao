import { Classe_Mae } from "./Classe_Mae.js";
export declare class Guerreiro extends Classe_Mae {
    private furia;
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String, furia: number);
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
    setFuria(furia: number): void;
    getFuria(): number;
    toString(): String;
    calcularDano(): void;
    atacar(): void;
}
//# sourceMappingURL=Guerreiro.d.ts.map