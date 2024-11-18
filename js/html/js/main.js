const quotes = [
    "\"The best way to predict the future is to invent it.\" ",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "In the words of Socrates: \"The unexamined life is not worth living.\" -- Socrates",
    "Albert Einstein once said, \"Life is like riding a bicycle. To keep your balance, you must keep moving.\"",
    "Oscar Wilde stated, \"Be yourself; everyone else is already taken.\""
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', () => {
    const quote = getRandomQuote();
    document.getElementById('quote').innerText = quote;
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quote').innerText = getRandomQuote();
});