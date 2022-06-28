const fs = require("fs")

const writeStream = fs.createWriteStream("./file.md", "UTF-8")

writeStream.write("#aeeee zé")

const readStream = fs.createReadStream("./swapi.json", "UTF-8")
const ws = fs.createWriteStream("./swapi_clone.json", "UTF-8")

/* escrever por de uma stream de leitura para de escrita */
/* readStream.on("data", data => {
    writeStream.write(date)
}) */

/* outra forma de escrever por de uma stream de leitura para de escrita */
readStream.pipe(writeStream)