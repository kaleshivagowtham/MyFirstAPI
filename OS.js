const os = require('os');

//Info about the use
console.log(os.userInfo());

//System uptime
console.log(`The system uptime is : ${os.uptime()} sec`);

//system type - windows/linux
console.log(os.type());

//os release info
console.log(os.release());

//free space
console.log(os.freemem());

//total space
console.log(os.totalmem());