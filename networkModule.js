const os = require('node:os');

function showNetworkInfo() {
  const interfaces = os.networkInterfaces();

  for (const interfaceName in interfaces) {
    console.log(`Interfaz ${interfaceName}:`);
    interfaces[interfaceName].forEach((details) => {
      console.log(`  Familia: ${details.family}`);
      console.log(`  Dirección: ${details.address}`);
      console.log(`  Interno: ${details.internal}`);
    });
  }
}

module.exports = { showNetworkInfo };