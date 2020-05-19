const os = require('os');

var totalSpace = os.totalmem();

var freeSpace = os.freemem();

console.log('totalmemory:' + totalSpace);

console.log(`freememory: ${freeSpace}`);
