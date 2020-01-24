const fs = require('fs');
const colors=require('colors');
const listar = (base, limite = 10) => {
  console.log('==================='.green);
  console.log(`=tabla de ${base}========`.blue);
  console.log('==================='.green);

  let data = '';
  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }
  console.log(data.italic.red);
};

const cearArchivo = async (base, limite) => {
  let data = '';
  if (!Number(base)) {
    throw TypeError('Debe ser un numero');
  }

  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }

  fs.writeFile('tabla.txt', data, err => {
    if (err) {
      throw err;
    }
    return console.log('El archivo table fue creado');
  });
};

module.exports = { cearArchivo, listar };
