import { Classe_Mae } from "./Classe_Mae";

export class MagoCorrompido extends Classe_Mae {
    constructor(
        nome: String,
        forca: number,
        mana: number,
        vida: number,
        dano: number,
        equipamento: String
    ) {
        super(nome, forca, mana, vida, dano, equipamento);
    }

    getNome(): String { return this.nome; }
    setNome(nome: String): void { this.nome = nome; }

    getForca(): number { return this.forca; }
    setForca(f: number): void { this.forca = f; }

    getMana(): number { return this.mana; }
    setMana(m: number): void { this.mana = m; }

    getVida(): number { return this.vida; }
    setVida(v: number): void { this.vida = v; }

    getDano(): number { return this.dano; }
    setDano(d: number): void { this.dano = d; }

    getEquipamento(): String { return this.equipamento; }
    setEquipamento(eq: String): void { this.equipamento = eq; }

    atacar(): void {
        console.log(`${this.nome} lançou uma magia sombria!`);
    }

    calcularDano(): number {
        const danoFinal = this.dano + this.forca * 0.5 + this.mana * 0.3;
        return Math.floor(danoFinal);
    }

    toString(): String {
        return `
            ${this.nome}
            Vida: ${this.vida}
            Mana: ${this.mana}
            Força: ${this.forca}
            Dano Base: ${this.dano}
            Equipamento: ${this.equipamento}
        `;
    }
}