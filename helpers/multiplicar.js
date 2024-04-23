const fs = require("fs");
const colors = require("colors");

const createMultiplyFile = async (base = 1, list = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${i * base} \n`;
    }

    if (list) {
      console.log(`*******  table of the ${base}  *******`.america);
      console.log(`\n`);

      console.log(salida.america);
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

    return `tabla-${base}.`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMultiplyFile,
};
