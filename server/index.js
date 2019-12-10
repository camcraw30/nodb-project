require("dotenv").config();
const express = require("express");
const {addFact, allFacts, editFact, deleteFact} = require("./nba_Controller");

// const {SESSION_SECRET, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

const PORT = 5000;

app.post("/api/nba/add", addFact)
app.get("/api/nba/facts", allFacts);
app.put("/api/nba/facts/:id", editFact)
app.delete("/api/nba/facts/:id", deleteFact)

app.listen(PORT, () => console.log("Listening on Port 5000"));