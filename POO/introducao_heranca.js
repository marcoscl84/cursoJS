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
    // this.constructor = Cao
    Object.defineProperty(Cao.prototype, "constructor", {
        value: Cao,
        enumerable: false
    })
}
Cao.prototype = new Animal()

let chica = new Cao("Chica", "mamifero")
console.log(chica)
console.log("-------------")

for (let prop in chica){
    if(chica.hasOwnProperty(prop)){
        console.log(prop)
    }
}

console.log("-------------")
console.log(chica instanceof Cao)

console.log("-------------")
console.log(Object.prototype.isPrototypeOf(chica)) //Animal ou Object
console.log(Object.getPrototypeOf(chica))
console.log(chica.__proto__)
console.log(chica.__proto__ === Object.getPrototypeOf(chica))