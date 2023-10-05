const fs = require("fs");
let targetFile = (process.cwd() + "./adventofcode2022_01/input.txt");
console.log(process.cwd() + "./adventofcode2022_01/input.txt");
let input = fs.readFileSync("./adventofcode2022_01/input.txt");

console.log(input.toString());
