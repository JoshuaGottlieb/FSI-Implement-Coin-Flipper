// Declaring variables that reference DOM objects.
let pennyState = document.getElementById("penny-image");
let flipButton = document.getElementById("flip");
let clearButton = document.getElementById("clear");
let headsAbsCount = document.getElementById("heads");
let headsPerCount = document.getElementById("heads-percent");
let tailsAbsCount = document.getElementById("tails");
let tailsPerCount = document.getElementById("tails-percent");
let message = document.getElementById("message");

// Declaring calculation-based variables.
let headsAbs = 0;
let headsPer = 0;
let tailsAbs = 0;
let tailsPer = 0;
let flipNum = 0;

// Flips the penny and updates the DOM with appropriate information.
flipButton.addEventListener('click', function() {
    // Increments number of flips
    flipNum++;

    // Rolls between 0 and 1
    let flipResult = Math.floor(Math.random() * 2);

    // If roll is 0, result is heads. If roll is 1, result is tails.
    // Steps: Update the image source, increment number of heads/tails rolled, update heads/tails percentage,
    //          update attributes of DOM objects.
    if(flipResult === 0) {
        pennyState.src = "./assets/images/penny-heads.jpg";
        headsAbs++;
        headsPer = +((headsAbs / flipNum) * 100).toFixed(2);
        tailsPer = +((tailsAbs / flipNum) * 100).toFixed(2);
        
        headsAbsCount.textContent = headsAbs;
        headsPerCount.textContent = `${headsPer}\%`;
        tailsPerCount.textContent = `${tailsPer}\%`;
        message.textContent = "You flipped heads!";
    }
    else{
        pennyState.src = "./assets/images/penny-tails.jpg";
        tailsAbs++;
        headsPer = +((headsAbs / flipNum) * 100).toFixed(2);
        tailsPer = +((tailsAbs / flipNum) * 100).toFixed(2);
        
        tailsAbsCount.textContent = tailsAbs;
        headsPerCount.textContent = `${headsPer}\%`;
        tailsPerCount.textContent = `${tailsPer}\%`;
        message.textContent = "You flipped tails!";
    }
})

// Clears the scoreboard. Resets all calculation variables to 0, resets image to heads, 
//  resets scoreboard DOM objects and display text.
clearButton.addEventListener('click', function() {
    headsAbs = 0;
    headsPer = 0;
    tailsAbs = 0;
    tailsPer = 0;
    flipNum = 0;
    pennyState.src = "./assets/images/penny-heads.jpg";
    headsAbsCount.textContent = headsAbs;
    tailsAbsCount.textContent = tailsAbs;
    headsPerCount.textContent = `${headsPer}\%`;
    tailsPerCount.textContent = `${tailsPer}\%`;
    message.textContent = "Let's Get Rolling!";
})