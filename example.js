/* jshint esversion: 6 */

const SittardGoBot = require('./SittardGoBot.js');
const config = require('./config.default.json');

const exampleArguments = [
    [['-f', '--flag-set'], {
        help: 'This is a test',
        action: 'storeConst',
        constant: 'I am a flag'
    }],
    [['-n', '--number'], {
        help: 'Enter a number',
        type: Number
    }],
    [['-r', '--required'], {
        help: 'A required field',
        required: true,
        metavar: 'MY_REQ',
    }]
];

const myBot = new SittardGoBot.Bot(config, exampleArguments);

console.log(myBot.getCliArgs());

myBot.on('READY', (event, b, c) => {
    
    console.log(b);
    console.log(c);
    
}, ['extra arg', 'second arg']);

myBot.on('DEBUG', (event, message, c) => {
    console.log(event, message, c);
});

myBot.on('MESSAGE', receiveMessage.bind(this));

function receiveMessage(event, msgObj) {
    // do something
}

myBot.connect();
