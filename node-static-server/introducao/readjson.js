const fs = require("fs")
const dado = require("./files/dados.json")

fs.readFile("./files/dados.json", "UTF-8", (err, content) => {
    console.log(JSON.parse(content)[0].name)
})

console.log("----------")
console.log(dado[0].lastName)