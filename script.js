// Show hidden birthday message
function showMessage() {
    document.getElementById("message").style.display = "block";
}

// Function to create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2 and 5 seconds

    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after animation ends
}

// Generate hearts at intervals
setInterval(createHeart, 300);
