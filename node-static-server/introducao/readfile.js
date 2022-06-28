const fs = require("fs")

const filemdSync = fs.readFileSync("./files/README.md", "utf-8")
console.log(filemdSync)
console.log("arquivo lido")
console.log("---------------------")

fs.readFile("./files/README.md", "utf-8", (err, content) => {
    if(err){
        throw err
    }

    console.log(content)
    
})

console.log("iniciando leitura assíncrona")


fs.readFile("./files/banner.jpg", (err, content) => {
    console.log("---------------------")
    if(err){
        throw err
    }

    console.log(content)
    
})
