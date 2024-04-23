// Function to toggle the visibility of accordion sections
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const chevron = content.previousElementSibling.querySelector("i");

    // Toggle the hidden class to show/hide the accordion content
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden"); // Show content
        chevron.classList.add("rotate-180"); // Rotate chevron to indicate open
    } else {
        content.classList.add("hidden"); // Hide content
        chevron.classList.remove("rotate-180"); // Revert chevron rotation
    }
}

// Apply hover effects to buttons
function applyHoverEffects() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.style.color = "blue"; // Change color on hover
        });
        button.addEventListener("mouseleave", () => {
            button.style.color = ""; // Revert to default on mouse leave
        });
    });
}

// Sanity check function
function sanityCheck() {
    console.log("!Sanity check: all good!"); // Verify script is working
}

// Run the sanity check and apply hover effects on page load
window.addEventListener("load", () => {
    sanityCheck(); // Sanity check to ensure everything is working
    applyHoverEffects(); // Apply hover effects to buttons
});
