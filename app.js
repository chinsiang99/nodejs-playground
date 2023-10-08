const { Buffer } = require('buffer')

// this is how we allocate how many bytes buffer, here we define 8 bytes, each one is represented hexadecimal numbers
const buff = Buffer.alloc(8);

console.log(buff);

// each character is being expressed with 1 byte
buff.write("s", 'utf-8');

console.log(buff.toJSON());

console.log(String.fromCharCode("115"));
console.log(String.fromCodePoint("0x73"));

// this means that take the string and alloc how many bytes to it, it won't take extra memory/bytes
const buff2 = Buffer.from("string", 'utf-8');

console.log(buff2.toJSON());

const buff3 = Buffer.from([115])
// will give string "s"
console.log(buff3.toString('utf-8'))