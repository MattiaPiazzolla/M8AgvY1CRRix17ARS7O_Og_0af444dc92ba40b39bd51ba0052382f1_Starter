// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get references to elements
    const placeInput = document.getElementById("place");
    const characterInput = document.getElementById("character");
    const generateBtn = document.getElementById("generate-btn");
    const storyOutput = document.getElementById("story-output");

    // Define a collection of story templates
    const storyTemplates = [
        "In the mystical land of <strong>{place}</strong>, a daring programmer named <strong>{character}</strong> discovered a bug in the Matrix. Their quest? To debug the code before the whole simulation crashed.",
        "Once upon a time in <strong>{place}</strong>, a legendary coder called <strong>{character}</strong> built a framework so powerful it revolutionized web development forever.",
        "Deep in the magical realms of <strong>{place}</strong>, <strong>{character}</strong> stumbled upon the sacred repository of all open-source projects. Their challenge? Contribute the most innovative pull request ever.",
        "In the enchanted city of <strong>{place}</strong>, the great <strong>{character}</strong> wrote a script so efficient it ran in O(1) time, saving the world from a computational meltdown.",
        "Within the virtual expanse of <strong>{place}</strong>, a hacker named <strong>{character}</strong> battled a rogue AI, using the ancient programming language of Assembly to prevail.",
        "In <strong>{place}</strong>, the brilliant developer <strong>{character}</strong> wrote an AI so advanced it became sentient. Together, they redefined the future of humanity."
    ];

    // Handle button click
    generateBtn.addEventListener("click", () => {
        // Get user input values
        const place = placeInput.value.trim();
        const character = characterInput.value.trim();

        // Validate inputs
        if (!place || !character) {
            storyOutput.innerHTML = `<p style="color: red;">Please fill out both fields to generate a story.</p>`;
            return;
        }

        // Select a random story template
        const randomStory = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];

        // Replace placeholders with user inputs
        const story = randomStory
            .replace(/{place}/g, place)
            .replace(/{character}/g, character);

        // Display the story
        storyOutput.innerHTML = `<p>${story}</p>`;

        // Clear inputs for the next story
        placeInput.value = "";
        characterInput.value = "";

        // Change the button text after generating a story
        generateBtn.textContent = "Generate Another Story";
    });
});