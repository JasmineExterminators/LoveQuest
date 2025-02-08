// const express = require('express');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

// app.post('/api/query', async (req, res) => {
//   const userInput = req.body.userInput;

//   try {
//     const response = await axios.post(
//       'https://api.perplexity.ai/chat/completions',
//       {
//         model: 'mistral-7b-instruct',
//         messages: [
//           { role: 'system', content: 'Be precise and concise.' },
//           { role: 'user', content: userInput },
//         ],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3000, () => console.log('Server running on http://localhost:3000'));


// async function fetchDateIdeas() {
//     console.log("Fetching date ideas...");
//     const response = await fetch('http://localhost:8080/generate', { // Proxy URL
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt: "Generate creative date ideas for February evenings." })
//     });
//     console.log("Response received:", response);
//     const data = await response.json();
//     console.log("Data fetched:", data);
//     displayDateIdeas(data.ideas);
// }


// function displayDateIdeas(ideas) {
//     const container = document.getElementById('date-ideas');
//     container.innerHTML = '';
//     ideas.forEach(idea => {
//         const ideaElement = document.createElement('div');
//         ideaElement.textContent = idea;
//         container.appendChild(ideaElement);
//     });
// }

// // Call the function periodically
// //setInterval(fetchDateIdeas, 36000); // Update every hour

// fetchDateIdeas();