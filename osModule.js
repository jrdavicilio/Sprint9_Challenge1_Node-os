const os = require('node:os')

function showSystemInfo() {
    const nombre = os.platform();
    const tipo = os.type();
    const version = os.version();
    const arquitectura = os.arch();
    const CPUS = os.cpus().length;
    const memoriaTotal = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const memoriaLibre = (os.freemem() / (1024 * 1024)).toFixed(2);

    console.log(`Nombre: ${nombre}`);
    console.log(`Tipo: ${tipo}`);
    console.log(`Versión: ${version}`);
    console.log(`Arquitectura: ${arquitectura}`);
    console.log(`CPUs: ${CPUS}`);
    console.log(`MemoriaTotal: ${memoriaTotal} MB`);
    console.log(`MemoriaLibre: ${memoriaLibre} MB`);
}


module.exports = { showSystemInfo };