const http = require('http')
const { emitWarning } = require('process')

const server = http.createServer((req , res) => {
    if (req.url === '/') {
        res.write('Hello World')
        return res.end()
    }

    if (req.url === '/about') {
        return res.end("About Page")
    }

    // blocking code
    //for (let i = 0; i < 10000; i++) {
    //   console.log(Math.random() * i)
    //}

    res.end("not found")
})

server.listen(3000)
console.log("listening on port 3000")