const fs = require("fs")
const dado = require("./files/dados.json")

dado.push({
    name: "Malena",
    lastName: "Conte Suarez"
})

fs.writeFile("./files/dados.json", JSON.stringify(dado), err => {  })