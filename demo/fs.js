const fs = require('fs')
const path = require('path')

/*fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err
    }
    console.log('folder was made')
})*/

const filePath = path.join(__dirname, 'test', 'text.txt')

/*fs.writeFile(filePath, 'Hello node js 1', err => {
    if (err) {
        throw err
    }
})*/

/*fs.appendFile(filePath, 'Hello node js 1\n', err => {
    if (err) {
        throw err
    }
})*/

fs.readFile(filePath,'utf-8', (err,  content) => {
    if (err) {
        throw err
    }
    console.log(content)
/*    const data = Buffer.from(content)
    console.log(data.toString())*/
})

