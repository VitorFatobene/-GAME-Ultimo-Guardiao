export declare abstract class Classe_Mae {
    protected nome: String;
    protected forca: number;
    protected mana: number;
    protected vida: number;
    protected dano: number;
    protected equipamento: String;
    constructor(nome: String, forca: number, mana: number, vida: number, dano: number, equipamento: String);
    abstract getNome(): String;
    abstract setNome(nome: String): void;
    abstract getForca(): number;
    abstract setForca(forca: number): void;
    abstract getMana(): number;
    abstract setMana(mana: number): void;
    abstract getVida(): number;
    abstract setVida(vida: number): void;
    abstract getDano(): number;
    abstract setDano(dano: number): void;
    abstract getEquipamento(): String;
    abstract setEquipamento(equipamento: String): void;
    abstract toString(): String;
    abstract atacar(): void;
    abstract calcularDano(): void;
}
//# sourceMappingURL=Classe_Mae.d.ts.map