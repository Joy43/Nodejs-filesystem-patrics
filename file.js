const fs=require('fs')
const readText=fs.readFileSync('./texts/read.txt','utf-8')
// write a text
const writeText=fs.writeFileSync('./texts/write.txt',readText + 'this is joy new ')
console.log(readText)