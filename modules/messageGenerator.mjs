import {messages, mindSets} from "./messageData.mjs";

//Helper function
const randomIndex = list => Math.floor(Math.random()* list.length);

//Module Core
const advice = function() {
    //initializing argument in case this function does not received from.
    let mindSet = mindSets[randomIndex(mindSets)];
    
    // Locating resource base in data entry. Finding best qoute base on mood selected.
    let messagesbyMindSet = [];
    
    switch (mindSet){
        case 'active': messagesbyMindSet = messages.filter(message => {if(message.subject === "hard work") return message}); break;
        case 'lazy': messagesbyMindSet = messages.filter(message => {if(message.subject === "procrastination") return message});break;
        case 'concern': messagesbyMindSet = messages.filter(message => {if(message.subject === "future") return message});break;
        case 'lost': messagesbyMindSet = messages.filter(message => {if(message.subject === "students") return message});break;
        default : messagesbyMindSet = messages.filter(message => {if(message.subject === "education") return message});
    }
    messagesbyMindSet = messagesbyMindSet[randomIndex(messagesbyMindSet)];
    return `When you feel ${mindSet}, always remember \"${messagesbyMindSet.quote}\", if you want to empower yourself follow ${messagesbyMindSet.author}..`;
    

}

console.log(advice());
