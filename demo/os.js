const os = require('os')

/*console.log('Операционная система', os.platform())
console.log('Архитектура процессора', os.arch())
console.log('Инфа по процессорам', os.cpus())*/
console.log('Памяти', os.freemem())
console.log('Памяти', os.totalmem())
console.log('Home directory', os.homedir())
console.log('Switched on', os.uptime()/3600)


