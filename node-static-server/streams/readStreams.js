const fs = require("fs")

fs.readFile("./swapi.json", (err, data) => {
    if(err) throw err

    const results = JSON.parse(data).results[0].name
    console.log(results)
})





/* carregando arquivos enormes por partes */
const readStream = fs.createReadStream("./swapi.json", "UTF-8")

/* carrega só a primeira parte */
/* readStream.once("data", data => {
    console.log(data)
}) */

let json = ""
readStream.on("data", data => {
    console.log("on data")
    console.log(data.length)
    json += data
})

readStream.on("end", () => {
    console.log("end")
    console.log(json)
})