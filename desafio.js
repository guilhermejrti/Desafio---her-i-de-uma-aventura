
//Criação da classe
class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if (this.tipo == "Mago"){
            let ataque = "usou magia";
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        } else if (this.tipo == "Guerreiro"){
            let ataque = "usou espada";
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        } else if (this.tipo == "Monge"){
            let ataque = "usou artes marciais";
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        } else if (this.tipo == "Ninja"){
            let ataque = "usou shuriken";
            console.log(`O herói ${this.tipo} usou ${ataque} `) 
        }
    };
};

   

//Tipos: Mago, Guerreiro, Monge e Ninja
let heroi = new personagem("Alucard", "950","Guerreiro");

