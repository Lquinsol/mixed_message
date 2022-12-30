import {messages, getQuote} from "./messageData.mjs";


const randomQoute = function() {
    return messages[Math.floor(Math.random()* messages.length)].quote;
};

console.log(randomQoute());
