const express = require("express")
const path = require("path")

const app = express()

/* app.get("/", (req, res) => {
    res.send("hi mundoworld")
}) */

// servidor estático para a rota raiz ("/")
app.use(express.static("static"))

// servidor estático para a rota images ("/images") - relativo ao local onde foi executado o servidor (comando do node)
//app.use("/images", express.static("images"))

//  servidor estático para a rota images ("/images") - caminho absoluto
app.use("/images", express.static(path.join(__dirname, "images")))

/* app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "404.html"))
}) */

app.get("*", (req, res) => {
    if(req.accepts("html")){
        res.status(404).sendFile(path.join(__dirname, "404.html"))
    }
})

app.listen(3001)