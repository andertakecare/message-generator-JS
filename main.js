let name = "nameless user";
console.log(process.version);
process.stdin.setEncoding('utf8');
console.log('Hello, please enter your name: ');

process.stdin.on('data', (input) => {
    name = input.trim();
    console.log(`Hello ${name}`);
    process.stdin.pause();
});