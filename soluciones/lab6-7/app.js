// Ejemplo de palindromo
// const palindromo = (s) => s === s.split("").reverse().join("");
// const nombre = "oso";
// console.log(palindromo(nombre));

// Ejemplo del fetch
const axios = require("axios").default;

const main = async () => {
  const { data } = await axios("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log({ data });
};

main();
