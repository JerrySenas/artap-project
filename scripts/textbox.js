import { choose } from "./random.js";

const typingDelay = 30;

let isTyping = false;
let typingTimeout;
let dialogueQueue = [];
let dialogueIndex = 0;

export const enterCodes = ["Enter", "Space", "KeyZ"];

export function showText(text) {
    const textbox = document.getElementById('textbox');
    let i = 0;

    isTyping = true;
    clearTimeout(typingTimeout);

    function type() {
        textbox.innerHTML = text.slice(0, ++i);

        if (i < text.length) {
            typingTimeout = setTimeout(type, typingDelay);
        } else {
            isTyping = false;
        }
    }

    type()
}

export function queueText(texts, callback=()=>{}) {
    if (Array.isArray(texts)) {
        dialogueQueue = texts;
    } else {
        dialogueQueue = [texts];
    }
    dialogueIndex = 1;
    document.addEventListener("keydown", event => {
        if (!enterCodes.includes(event.code)) return;

        if (isTyping) {
            clearTimeout(typingTimeout);
            document.getElementById('textbox').innerHTML = dialogueQueue[dialogueIndex - 1];
            isTyping = false;
            return;
        }

        if (dialogueIndex < dialogueQueue.length) {
            showText(dialogueQueue[dialogueIndex]);
            dialogueIndex++;
        } else {
            showText("");
            callback();
        }
    })

    showText(dialogueQueue[0]);
}

export function randomText(texts, callback) {
    queueText(choose(texts), callback);
}