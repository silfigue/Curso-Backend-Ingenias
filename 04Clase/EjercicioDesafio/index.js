const { clear } = require('console');
const http = require('http'); //Importo modulo http
const PORT = 3008
const server = http.createServer((request, response) => {
    let respuesta = ""
    let statusCode = 200;
    if (request.url === '/'){
        respuesta = "Bienvenid@s a nuestra web!"
        response.writeHead(200, { 'Content-Type': 'text/html' });  // seteo el formato de respuesta del header: html
        response.end('<html><body><h1>'+respuesta+'</h1></body></html>');// seteo el contenido de la respuesta
        
    } else if (request.url === '/cursos'){
        respuesta = "Bienvenid@s a nuestra seccion de cursos";
        response.writeHead(200, { 'Content-Type': 'text/html' });  // seteo el formato de respuesta del header: html
        response.end('<html><body><h1>'+respuesta+'</h1></body></html>');
    } else if (request.url === '/contacto') {
        respuesta = "Bienvenid@s a nuestra seccion de contacto :)";
        response.writeHead(200, { 'Content-Type': 'text/html' });  // seteo el formato de respuesta del header: html
        response.end('<html><body><h1>'+respuesta+'</h1></body></html>');
    } else {
        statusCode = 404;
        respuesta = "No se encontro la ruta"
        response.writeHead(400, { 'Content-Type': 'text/plain' });  // seteo el formato de respuesta del header: texto plano
        response.end(respuesta);
    }
    
})

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
});

/*
let statusCode = 200;
const server = http.createServer(function (req, res) {   //creo el servidor web
    if (req.url == '/') { //Compruebo la ruta raiz del sitio
        res.writeHead(200, { 'Content-Type': 'text/html' });  // seteo el formato de respuesta del header: html
        res.write('<html><body><h1>Pagina De Inicio.</h1></body></html>');// seteo el contenido de la respuesta
        res.end("Bienvenid@s a nuestra web"); //muestro respuesta
    }
    else if (req.url == "/cursos") {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><h1>Pagina De Cursos</h1></body></html>');
        res.end("Bienvenid@s a nuestra seccion de cursos");
    }
    else if (req.url == "/contacto") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Pagina de Contacto</h1></body></html>');
        res.end("Bienvenid@s a nuestra seccion de contacto :)");
    }
    else{ //respuesta para rutas inexistentes
        res.statusCode = 404; 
        res.setHeader('Content-Type', 'application/text-plain') // seteo el formato de respuesta del header: texto plano
        res.end('"No se encontro la ruta"');
    }
})
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
})
;*/