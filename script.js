async function fetchDateIdeas() {
    const response = await fetch('https://api.perplexity.ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: "Generate creative date ideas for February evenings." })
    });
    const data = await response.json();
    displayDateIdeas(data.ideas);
}

function displayDateIdeas(ideas) {
    const container = document.getElementById('date-ideas');
    container.innerHTML = '';
    ideas.forEach(idea => {
        const ideaElement = document.createElement('div');
        ideaElement.textContent = idea;
        container.appendChild(ideaElement);
    });
}

// Call the function periodically
setInterval(fetchDateIdeas, 3600000); // Update every hour