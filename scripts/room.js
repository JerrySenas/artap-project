import { randomText } from "./textbox.js";

let isDone = false;

function setDone() { isDone = true; }

const trigger = document.getElementById("gallery-trigger");
const overlay = document.getElementById("gallery-overlay");
const images = document.querySelectorAll("#gallery img");

const prev = document.getElementById("prev-image");
const next = document.getElementById("next-image");

let currentImage = 0;

function showImage(index) {
    images[currentImage].classList.remove("active");

    currentImage = (index + images.length) % images.length;

    images[currentImage].classList.add("active");
}

function openGallery() {
    currentImage = 0;
    images.forEach(img => img.classList.remove("active"));
    images[currentImage].classList.add("active");

    overlay.style.display = "flex";
}

function closeGallery() {
    overlay.style.display = "none";
}

trigger.addEventListener("click", openGallery);

prev.addEventListener("click", () => {
    showImage(currentImage - 1);
});

next.addEventListener("click", () => {
    showImage(currentImage + 1);
});

overlay.addEventListener("click", event => {
    if (event.target === overlay) {
        closeGallery();
    }
});

document.addEventListener("keydown", event => {
    if (overlay.style.display !== "flex") return;

    if (event.key === "ArrowLeft") {
        showImage(currentImage - 1);
    } else if (event.key === "ArrowRight") {
        showImage(currentImage + 1);
    } else if (event.key === "Escape") {
        closeGallery();
    }
});

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
    ["This must be his study.", "...", "Hard to imagine staying productive in a place like this. "],
    "...",
], () => {
    document.getElementById("bg-music").volume = 0.3;
    document.getElementById("bg-music").play();
});