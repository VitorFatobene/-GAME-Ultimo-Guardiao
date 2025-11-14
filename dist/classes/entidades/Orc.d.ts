import { Classe_Mae } from "./Classe_Mae";
export declare class Orc extends Classe_Mae {
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String);
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
    calcularDano(): void;
    atacar(): void;
}
//# sourceMappingURL=Orc.d.ts.map