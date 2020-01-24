
const { cearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors=require('colors');
let comando=argv._[0];
switch (comando) {
  case 'listar':
    listar(argv.base, argv.limite);
    break;

  case 'crear':
    cearArchivo(argv.base, argv.limite)
      .then(test => {})
      .catch(err => {
        console.log(err);
      });
    break;
  default:
    console.log('Wrong Comand');

    break;
}

//let base = 8;
