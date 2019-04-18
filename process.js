//console.log(process.argv);
//var flag = process.argv.indexOf('--user');
//console.log(flag);
process.stdout.write('ask me a question ');
process.stdin.on('data',function(answer){
    console.log(answer.toString().trim());
    process.exit();
});

