const { createMultiplyFile } = require("./helpers/multiplicar.js");
const argv = require("./yargs/yargs.js");
const colors = require("colors");

console.clear();

// console.log(process.argv);
// console.log(argv);

createMultiplyFile(argv.base, argv.list, argv.hasta)
  .then((nameFile) => console.log(nameFile.rainbow, "created".blue))
  .catch((err) => console.log(err));
