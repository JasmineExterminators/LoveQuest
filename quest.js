// Replace with your actual Perplexity API key
const API_KEY = "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";

// Select DOM elements
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
    frequency_penalty: 1,
    "messages": [{ "role": "user", "content": "generate a list of cute sustainable date ideas with descriptions. do not have an intro or conclusion just create the list. start each date idea with the characters *** and each description with the characters ###. also do not include any reference numbers at the end of descriptions" }]

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

function getNextElementWithIdOrClass(startElement, selector) {
  const siblings = [...document.querySelectorAll(selector)];
  const index = siblings.indexOf(startElement)
  return siblings[index + 1] || null;
}

// Function to display fetched date ideas on the webpage
function displayDateIdeas(ideas) {
  // Clear any existing ideas
  ideasList.innerHTML = "";

  // Split the response into individual ideas and add them as list items

  listOfIdeas = ideas.split("\n");

  listOfIdeas.forEach((idea) => {
    console.log(idea);
    if (idea.includes("  ###")) {
      console.log("found date description");

      const descriptionDiv = document.createElement('div');
      document.body.appendChild(descriptionDiv);
      descriptionDiv.setAttribute("id", "divID");
      descriptionDiv.className = "content";

      var description = document.createElement("p");
      var node = document.createTextNode(idea.substring(5));
      description.appendChild(node);

      descriptionDiv.appendChild(description);


    }

    if (idea.includes("- ***")) {
      console.log("found date idea");

      const newDiv = document.createElement('div');
      newDiv.className = "date_idea_div";

      const newButton = document.createElement('button');
      newButton.setAttribute("id", 'buttonID');
      newButton.textContent = idea.substring(5, idea.length - 2);
      newButton.className = "collapsible";

      const heartButton = document.createElement('button');
      heartButton.className = "heart_button";

      const heartSpan = document.createElement('span');
      heartSpan.className = "material-symbols-outlined";
      heartSpan.textContent = "favorite";


      heartButton.appendChild(heartSpan);
      newDiv.appendChild(heartButton);
      newDiv.appendChild(newButton);
      document.body.appendChild(newDiv);

    }

  });
}

// const hearts = postQuests.querySelector("material-symbols-outlined");
// ratings.forEach(rating => {
//   const button = rating.querySelector("heart-selected");

//   button.addEventListener("click", async () => {

//   })
// })


async function postQuests() {

  const ideas = await fetchDateIdeas();
  console.log("ideas fetched");
  if (ideas) {
    displayDateIdeas(ideas);
  }

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    // var content = getNextElementWithIdOrClass(coll[i], ".content");
    coll[i].addEventListener("click", function () {
      console.log("CLICKEDDD");
      this.classList.toggle("active");

      var par = (this.parentElement);

      const siblings = [...document.querySelectorAll('#divID')];
      const siblings2 = [...document.querySelectorAll('.date_idea_div')];
        const index = siblings2.indexOf(par)
        console.log(index);
        var content = siblings[index-1] || null;

      
      // var content = content1.nextElementSibling;

      console.log(content.id);

      if (content.style.display === "block") {
        content.style.display = "none";
        this.style.borderBottomLeftRadius = '15px';
        this.style.borderBottomRightRadius = '15px';

      } else {
        content.style.display = "block";
        this.style.borderBottomLeftRadius = '0px';
        this.style.borderBottomRightRadius = '0px';
      }
    });
  }
};


postQuests();
