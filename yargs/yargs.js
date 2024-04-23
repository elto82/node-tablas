const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "It is the basis of the multiplication table",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Displays the table in console",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "It is the limit of the multiplication table",
  }).argv;

module.exports = argv;
