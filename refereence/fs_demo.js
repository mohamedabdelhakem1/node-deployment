const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created successfully');
// });
// create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello 7kma', err => {
//     if (err) throw err;
//     console.log('file created successfully');
//     // append file 
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'i love node.js', err => {
//         if (err) throw err;
//         console.log('file created successfully');
//     });
// });

fs.rename(path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname, '/test', 'helloworld.txt'),
 (err) => {
            if (err) throw err;
            console.log('renamed');
});
