//  local module
const add=require('./local-1')
const {add:add2,a:a2}=require('./local-2')
console.log(add2(3,6,6))
// build in module
const path=require("path")
console.log(path.parse("/H:/Apollo Level 2 Web Dev/Mission-2/Node js and card operation/index.js "));