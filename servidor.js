//Declaro las librertia que voy a utilizar - Modulos
const server = require('http')
const {Libreria} = require('./modulos/librerias')

const host = 'localhost' //172.0.0.1
const port = 3000 //4000

let miVariable = '<h1>Hola soy Ariel</h1>'

const Alumnos = new Libreria(['Job Daniel Hernández Ramirez', 'Pedro Alonso Martínez', 'Daniel Gil',
'Daniel Sotelo Isidro', 'José Alejandro Esquivel', 'Eric Rey Cruz Martinez', 'Mauricio Aviles Piña',
'Jair Serralde', 'Carlos Eduardo Muñoz Carbajal', 'Guillermo Ortega Vargas', 'Kevin Alvarez Ramírez']);

function request (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(Alumnos.imprimeIntegranteAlAsar())
    res.end()
}


const servidor = server.createServer(request);
servidor.listen(port, host, ()=> {
    console.log(`Servidor iniciado en http://${host}:${port}`)
});

