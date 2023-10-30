function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.emitirSom = function() {
    console.log(`${this.nome} faz um som.`);
}

function Cachorro(nome, raca) {
    Animal.call(this, nome);
    this.raca = raca;
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function() {
    console.log(`${this.nome} (${this.raca}) está latindo.`);
}

function Gato(nome, cor) {
    Animal.call(this, nome);
    this.cor = cor;
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.miar = function() {
    console.log(`${this.nome} (${this.cor}) está miando.`);
}

const rex = new Cachorro("Rex", "Labrador");
const robson = new Cachorro("Robson", "Salsicha");
const yumi = new Gato("Yumi", "Cinza");

rex.emitirSom();
rex.latir();

robson.emitirSom();
robson.latir();

yumi.emitirSom();
yumi.miar();
