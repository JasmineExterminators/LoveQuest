// MONGODB AND NODEJS STUFF
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const { MongoClient } = require("mongodb");

const app = express();
const port = 5500;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
// app.use(express.static('public'));

// AUTHENTICATION STUFF
const username = encodeURIComponent("JasmineExterminators");
const password = encodeURIComponent("yipeee");
const clusterUrl = "clusterlovequest.m4gy3.mongodb.net";
const authMechanism = "SCRAM-SHA-1";

// Replace the following with your MongoDB deployment's connection string.
const uri =
  `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;
// Create a new MongoClient
const client = new MongoClient(uri);
// Function to connect to the server

async function run() {
  try {
    // Handle the POST request
    app.post('/submit', async (req, res) => {
        const { firstName, lastName, school, major, wantGender, sexId, mbti, hogHouse, introExtro, interests } = req.body;
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
  
        // Insert the data into MongoDB
        console.log("client");
        await client.connect();
        const database = client.db("LoveQuest");
        console.log("database");
        const users = database.collection("users");
        console.log("users");
        const newUser = { firstName, lastName, school, major, wantGender, sexId, mbti, hogHouse, introExtro, interests };
        const result = await users.insertOne(newUser);
        console.log(`New user created with the following id: ${result.insertedId}`);
  
        // Retrieve and log the inserted document
        const insertedUser = await users.findOne({ _id: result.insertedId });
        console.log('Inserted User:', insertedUser);
  
        res.json({ message: 'User data received and stored successfully', user: insertedUser });
    });
  
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (err) {
        console.error(err);
    // } finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    // }
    }
}

run().catch(console.dir);