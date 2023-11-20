function player1() {
    return Math.floor(Math.random() * 6) + 1;
}
function player2() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the images based on the player rolls
function updateImages() {
    var imgElement = document.querySelector(".img1");
    var imgElement2 = document.querySelector(".img2");

    // Store the initial rolls in variables
    var p1 = player1();
    var p2 = player2();

    // Map roll values to image sources using an array
    var images = [
        "dice1.png",
        "dice2.png",
        "dice3.png",
        "dice4.png",
        "dice5.png",
        "dice6.png"
    ];

    // Set image sources based on roll values
    imgElement.src = images[p1 - 1];
    imgElement2.src = images[p2 - 1];

    // Return the rolls for further use if needed
    return { p1, p2 };
}
// Reference to the element where you want to display the result
var winplay = document.querySelector(".winner");

function win() {
    var rolls = updateImages();

    if (rolls.p1 > rolls.p2) {
        winplay.textContent = "Winner is Player 1";

    } else if (rolls.p1 < rolls.p2) {
        winplay.textContent = "Winner is Player 2";

    } else {
        winplay.textContent = "Draw Match";

    }
}

// Add a click event listener to the HTML body
document.body.addEventListener('click', win);

