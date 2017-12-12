/* jshint esversion: 6 */

const SittardGoBot = require('./SittardGoBot.js');

const testToken = '0';
const testClientId = '0';
const version = '1.1';
const description = 'This is an example file';

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

const myBot = new SittardGoBot.Bot(
    testToken, testClientId, description, version
);

console.log(myBot.getCliArgs());

myBot.on('READY', (event, b, c) => {
    
    console.log(b);
    console.log(c);
    
}, ['extra arg', 'tweede arg']);

myBot.on('DEBUG', (event, message, c) => {
    
});

this.bot.on('MESSAGE', receiveMessage.bind(this));

function receiveMessage(e, msgObj) {
    // do something
}

myBot.connect();


