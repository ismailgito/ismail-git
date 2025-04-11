import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to serve HTML form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/user.html");
});

// Handle POST request from form
app.post("/user", (req, res) => {
    res.render("user.ejs", {
        name: req.body.name,
        age: req.body.age,
        skills: req.body.skills,
        interest: req.body.interest
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
