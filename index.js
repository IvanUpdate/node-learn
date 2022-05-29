const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    console.log(req.url)

   /* if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-Type': 'text/html',
            })
            res.end(data)
        })
    } else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-Type': 'text/html',
            })
            res.end(data)
        })
    }*/

    /*res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    res.end('<h1>HELLO NODE JS!!!</h1>')*/

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : 'contact')

    let contentType = 'text/html'



    const extension = path.extname(filePath)

    switch(extension) {
        case 'css':
            contentType = 'text/css'
            break
        case 'js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!extension) {
        filePath+='.html'
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, error_data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {res.writeHead(200, {
                    'Content-Type': contentType,
                })
                    res.end(error_data)
                }
            })
        } else {res.writeHead(200, {
            'Content-Type': contentType,
        })
            res.end(data)
        }

    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`server has been started... on ${PORT}`)
})
