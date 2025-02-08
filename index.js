const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Replace the following with values for your environment.
const username = encodeURIComponent("JasmineExterminators");
const password = encodeURIComponent("yipeee%21");
const clusterUrl = "mongodb+srv://JasmineExterminators:yipeee%21@clusterlovequest.m4gy3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterLoveQuest";

const authMechanism = "SCRAM-SHA-256";

// Replace the following with your MongoDB deployment's connection string.
const uri =
  `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the server
async function run() {
  try {
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

        // Handle the POST request
        app.post('/submit', async (req, res) => {
            const { firstName, lastName } = req.body;
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
    
            // Insert the data into MongoDB
            const database = client.db("LoveQuest");
            const users = database.collection("users");
            const newUser = { firstName, lastName };
            const result = await users.insertOne(newUser);
            console.log(`New user created with the following id: ${result.insertedId}`);
    
            res.json({ message: 'User data received and stored successfully' });

            const insertedUser = await users.findOne({ _id: result.insertedId });
            console.log('Inserted User:', insertedUser);
            res.json({ message: 'User data received and stored successfully', user: insertedUser });
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
