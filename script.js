async function fetchDateIdeas() {
    console.log("Fetching date ideas...");
    const response = await fetch('http://localhost:8080/generate', { // Proxy URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: "Generate creative date ideas for February evenings." })
    });
    console.log("Response received:", response);
    const data = await response.json();
    console.log("Data fetched:", data);
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
//setInterval(fetchDateIdeas, 36000); // Update every hour

fetchDateIdeas();