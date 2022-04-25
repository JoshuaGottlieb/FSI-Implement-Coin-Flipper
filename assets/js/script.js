// TODO: Declare any global variables we need

let pennyState = document.getElementById("penny-image");
let flipButton = document.getElementById("flip");
let clearButton = document.getElementById("clear");
let headsAbsCount = document.getElementById("heads");
let headsPerCount = document.getElementById("heads-percent");
let tailsAbsCount = document.getElementById("tails");
let tailsPerCount = document.getElementById("tails-percent");

let headsAbs = 0;
let headsPer = 0;
let tailsAbs = 0;
let tailsPer = 0;
let flipNum = 0;

    // TODO: Add event listener and handler for flip and clear buttons
flipButton.addEventListener('click', function() {
    flipNum++;
    let flipResult = Math.floor(Math.random() * 2);

    if(flipResult === 0) {
        pennyState.src = "./assets/images/penny-heads.jpg";
        headsAbs++;
        headsPer = +((headsAbs / flipNum) * 100).toFixed(2);
        tailsPer = +((tailsAbs / flipNum) * 100).toFixed(2);
        
        headsAbsCount.textContent = headsAbs;
        headsPerCount.textContent = `${headsPer}\%`;
        tailsPerCount.textContent = `${tailsPer}\%`;
    }
    else{
        pennyState.src = "./assets/images/penny-tails.jpg";
        tailsAbs++;
        headsPer = +((headsAbs / flipNum) * 100).toFixed(2);
        tailsPer = +((tailsAbs / flipNum) * 100).toFixed(2);
        
        tailsAbsCount.textContent = tailsAbs;
        headsPerCount.textContent = `${headsPer}\%`;
        tailsPerCount.textContent = `${tailsPer}\%`;
    }
})

clearButton.addEventListener('click', function() {
    let headsAbs = 0;
    let headsPer = 0;
    let tailsAbs = 0;
    let tailsPer = 0;
    let flipNum = 0;
    headsAbsCount.textContent = headsAbs;
    tailsAbsCount.textContent = tailsAbs;
    headsPerCount.textContent = `${headsPer}\%`;
    tailsPerCount.textContent = `${tailsPer}\%`;
})


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)