const CARD_IMAGES = [
    "00-fool.webp",
    "01-magician.webp",
    "02-high-priestess.webp",
    "03-empress.webp",
    "04-emperor.webp",
    "05-hierophant.webp",
    "06-lovers.webp",
    "07-chariot.webp",
    "08-strength.webp",
    "09-hermit.webp",
    "10-fortune.webp",
    "11-justice.webp",
    "12-hanged.webp",
    "13-death.webp",
    "14-temperance.webp",
    "15-devil.webp",
    "16-tower.webp",
    "17-star.webp",
    "18-moon.webp",
    "19-sun.webp",
    "20-judgement.webp",
    "21-world.webp"
]

export function pair(x, y) {
    // Szudzik's pairing function
    return y > x ? (y*y + x) : (x*x + x + y);
}

export function unpair(z) {
    var q = Math.floor(Math.sqrt(z));
    var l = z - q*q;
    return l < q ? [l, q] : [q, l - q];
}

export function random() {
    const first = Math.floor(Math.random() * CARD_IMAGES.length);
    let second;
    do {
        second = Math.floor(Math.random() * CARD_IMAGES.length);
    } while (first === second);

    document.querySelector("#card1 #card-front").style.backgroundImage = `url(assets/img/tarot/${CARD_IMAGES[first]})`
    document.querySelector("#card2 #card-front").style.backgroundImage = `url(assets/img/tarot/${CARD_IMAGES[second]})`

    return first < second ? pair(first, second) : pair(second, first);
}

export function choose(choices) {
    return choices[random() % choices.length];
}