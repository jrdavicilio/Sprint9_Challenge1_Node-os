const { showSystemInfo } = require('./osModule');
const { showNetworkInfo } = require('./networkModule');

console.log('Información del Sistema Operativo');
showSystemInfo();

console.log('Información de las Interfaces de Red');
showNetworkInfo();