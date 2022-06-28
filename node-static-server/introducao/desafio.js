const fs = require("fs")
const { getByFlag } = require("./getByFlag")

const dados = require("./files/dados.json")

const name = getByFlag("--name")
const lastName = getByFlag("--lastname")

const teste = {name: "", lastname: ""}

const dado = ["name", "lastname"].reduce( (current, next) => {
    current[next] = getByFlag("--"+next)
    return current
}, {})

dados.push(dado)

fs.writeFile("./files/dados.json", JSON.stringify(dados), err => {
    if(err){
        throw err
    }
})