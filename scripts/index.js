import { queueText, enterCodes } from "./textbox.js";
import { random, unpair } from "./random.js";

let isDone = false;

function setDone() { isDone = true; }

queueText([
    "Press 'z', Enter, or Space to advance text.",
    "Click to interact with objects.",
    "Try to interact with as many items as you can."
], setDone)

document.addEventListener("keydown", event => {
    if (enterCodes.includes(event.code) && isDone) {
        window.location.href = "/room.html"
    }
});