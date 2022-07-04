function Animal(tipo){
    if(tipo) this.tipo = tipo
}


Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

function Cao(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    this.constructor = Cao
}
Cao.prototype = new Animal()

let chica = new Cao("Chica", "mamifero")