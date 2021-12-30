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
    return "TEMP3\n";
}
generateMessage();