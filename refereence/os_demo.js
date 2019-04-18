const os = require('os');
//platform
console.log(os.platform());
// cpu arch
console.log(os.arch());
//cpu   core info
console.log(os.cpus());
//cpu number of cores
console.log(os.cpus().length);
// free mem
console.log(os.freemem() / 1024 /1024);
console.log(os.totalmem() / 1024 /1024);
console.log(os.homedir());
console.log(os.uptime());