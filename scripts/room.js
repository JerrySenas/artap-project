import { randomText } from "./textbox.js";

let isDone = false;

function setDone() { isDone = true; }

randomText([
    "...",
    "A pungent odor fills the room.",
    "A pleasant odor fills the room.",
    "The smell reminds you of a stuffy storage closet.",
    "A lifeless room.",
    "About 8 square meters.",
    "A tiny room.",
    "A not-so-large room.",
    ["A safe haven.", "...", "Was a safe haven."],
    ["...", "It's a good thing this room was air conditioned."],
    "Dust from the city coats the entire room.",
    ["...", "I'm not paid enough for this."],
    "I'm surprised someone can live like this.",
    ["...", "This room is quite underwhelming, isn't it?", "...", "If you ignore the dead body."],
    "Poor guy.",
    "...",
    "So cluttered...",
    "Does this guy ever clean his room?",
    "Curiously, there's no blood on anything other than the body.",
    "I need to go to the ████████.",
    "血色のワンルーム",
    "What a way to go...",
    "I hope I won't end up like him.",
    "Oh.",
    ["...", "Not what I was expecting."],
    "Just another day.",
    "Death.",
    "Such a shame.",
    "This must be his study.",
    "...",
], () => {
    document.getElementById("bg-music").volume = 0.3;
    document.getElementById("bg-music").play();
});