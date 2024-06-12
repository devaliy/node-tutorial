const fs = require('fs');
fs.writeFileSync('app.txt', 'Hi Welcome Aliu to the node js course')
console.log(fs.readFileSync('app.txt').toString())



// const {
//     obj,func
// } = require('./utils')
// console.log(obj)
// console.log(func(3, 4))
// console.log(__dirname, __filename)
