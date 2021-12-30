// Main program file
function generateMessage() {
    let fullMessage = message1() + message2() + message3();
    console.log(fullMessage);
}

function message1() {
    let movieQuotes = [
        ["With great power, comes great responsibility."],
        ["I find your lack of faith disturbing."],
        ["I'll be back."],
        ["SAY WHAT AGAIN!"],
        ["We thought you was a toad!"],
        ["I believe whatever doesn't kill you, simply makes you stranger."],
        ["YOU! ARE! A! TOY!"]
    ];
    let randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
    return randomQuote + "\n";
}

function message2() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return `The letter of the day is ${randomLetter}.\n`;
}

function message3() {
    let lucky1 = Math.ceil(Math.random() * 30);
    let lucky2 = Math.ceil(Math.random() * 30) + 20;
    let lucky3 = Math.ceil(Math.random() * 30) + 50;
    return `Your lucky numbers are ${lucky1}, ${lucky2}, and ${lucky3}`;
}
generateMessage();