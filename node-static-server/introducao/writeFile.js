const fs = require("fs")
const { isReadable } = require("stream")

const md = `
    #este é um conteudo criado dinamicamente

    * item 1
    * item 2
`
const users = [{ name: "Marcos", lastName: "Conte Lima" }]

fs.writeFile('./files/teste.md', md.trim(), err => {
    if(err){
        throw err
    }
    console.log("arquivo salvo")
})

const createDados = () => {
    fs.writeFile('./files/dados.json', JSON.stringify(users), err => {
        if(err){
            throw err
        }
        console.log("arquivo JSON salvo")
    })
}

if(!fs.existsSync("files")){
    fs.mkdir("files", err => {
        if(err){
            throw err
        }
        createDados()
    })
} else {
    createDados()
}

