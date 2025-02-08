// Replace with your actual Perplexity API key
const API_KEY = "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";

// Select DOM elements
const fetchButton = document.getElementById("fetchIdeasButton");
const ideasList = document.getElementById("dateIdeasList");

// Function to fetch date ideas from the Perplexity API
async function fetchDateIdeas() {
  const url = "https://api.perplexity.ai/chat/completions";
  const headers = {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const data = {
    method: 'POST',
    model: "sonar",
    frequency_penalty:1,
    "messages":[{"role":"user","content":"generate a list of cute sustainable date ideas with descriptions. do not have an intro or conclusion just create the list. start each date idea with the characters *** and each description with the characters ###. also do not include any reference numbers at the end of descriptions"}]
    
  };

  fetch('https://api.perplexity.ai/chat/completions', data)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  try {
    // Fetch data from the Perplexity API
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result.choices[0].message.content;
  } catch (error) {
    console.error("Failed to fetch date ideas:", error);
    //alert("Failed to fetch date ideas. Check the console for more details.");
  }
}

// Function to display fetched date ideas on the webpage
function displayDateIdeas(ideas) {
  // Clear any existing ideas
  ideasList.innerHTML = "";

  // Split the response into individual ideas and add them as list items

  listOfIdeas = ideas.split("\n");

  listOfIdeas.forEach((idea) => {
    console.log(idea);
    if(idea.includes("  ###")){
        console.log("found date description");
    }

    if(idea.includes("- ***")){
        console.log("found date idea");
        const listItem = document.createElement("li");
        listItem.textContent = idea.substring(5, idea.length-2);
        ideasList.appendChild(listItem);
    }
    // if (idea.trim()) {
    //   const listItem = document.createElement("li");
    //   listItem.textContent = idea.trim();
    //   ideasList.appendChild(listItem);
    // }
  });
}

// Add event listener to the button
async function postQuests() {
    console.log("button pressed");
  const ideas = await fetchDateIdeas();
  console.log("ideas fetched");
  if (ideas) {
    displayDateIdeas(ideas);
  }
};

postQuests();
