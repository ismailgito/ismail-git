// Step 1: Install all npm packages and import them
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Step 2: Create a server and import the body-parser middleware
const app = express();
const port = 3000;

// Simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //<---- dirname is a method for common js not only module JSVM

// Step 3: Create a middleware function to log the request method and URL
let bandName = "";


// Step 4: Middleware
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}



// Step 5: Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Step 6: Handle form submission
app.post('/submit', bandNameGenerator, (req, res) => {
  res.send("<h1>Your band name is " + bandName + "</h1>");
  console.log("Your band name is " + bandName);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
