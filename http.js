const http = require('http')

http.createServer((request, response) => {

    console.log(request.url)
    
    if (request.url === '/') {
        response.write('Welcome to the server')
        return response.end()
    }
    
    if (request.url === '/about') {
        response.write('acerca de')
        return response.end()
    }

    response.write(`
        <h1>NOT FOUND</h1>
        <p>esta pagina no se encontró</p>
        <a href="/">Volver al inicio</a>
        `)
    response.end()
}).listen(3000)
 
console.log('servidor escuchando en el puerto 3000')