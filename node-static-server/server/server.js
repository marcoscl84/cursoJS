const http = require("http")
const fs = require("fs")

http.createServer( (req, res) => {
  

    /* res.end(`
        <!DOCTYPE html>
        <html>

        <head>
            <title>Heyyy!</title>

            <link rel="stylesheet" href="estilo/estilo.css">
        </head>

        <body>
            <h1>Ola Mundo !!!</h1>
            <p>url: ${req.url}</p>

            <img src="img/logo.png" alt="">
        </body>

        </html>
    `) */

     

        switch(req.url){
            case "/":
            case "/index.html":
                return fs.readFile("./index.html", (err, html) => {
                    if(err){
                        res.writeHead(500)  
                        res.end("<h1>Fodeooo </h1>")
                    }

                res.writeHead(200, { "Content-Type": "text/html" })  

                const convertToTemplate = new Function("return `" + html + "`")
                res.end(convertToTemplate.call(req))
                
            })
            case "/estilo/estilo.css":
                res.writeHead(200, { "Content-Type": "text/css" })  
                return res.end("body {color: red;}")
                
            case "/img/logo.png":
                res.writeHead(200, { "Content-Type": "image/png" }) 
                return fs.createReadStream("./img/logo.png").pipe(res)
            default:
                res.writeHead(404, { "Content-Type": "text/html" }) 
                res.end("<h1>Fodeooo </h1>")

        }

}).listen(3001)

console.log("servidor na porta 3000 \n http://localhost:3000")