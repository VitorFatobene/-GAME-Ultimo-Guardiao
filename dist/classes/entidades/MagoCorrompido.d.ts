import { Classe_Mae } from "./Classe_Mae";
export declare class MagoCorrompido extends Classe_Mae {
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String);
    getNome(): String;
    setNome(nome: String): void;
    getForca(): number;
    setForca(f: number): void;
    getMana(): number;
    setMana(m: number): void;
    getVida(): number;
    setVida(v: number): void;
    getDano(): number;
    setDano(d: number): void;
    getEquipamento(): String;
    setEquipamento(eq: String): void;
    atacar(): void;
    calcularDano(): number;
    toString(): String;
}
//# sourceMappingURL=MagoCorrompido.d.ts.map