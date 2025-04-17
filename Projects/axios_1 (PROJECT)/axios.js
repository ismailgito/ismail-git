import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        console.log(result);
        res.render("axios_1.ejs", { data: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("axios_1.ejs", {
            error: error.message,
        });
    }
});

app.post("/submit", async (req, res) => {
    try {
        const type = req.body.type;
        const participants = req.body.participants;
        const response = await axios.get(
            `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
        );
        const result = response.data;
        res.render("axios_1.ejs", { data: result }); // You need to send a response
    } catch (error) {
        console.log("fetch error", error.message);
        const err = [
            "error 404 not found",
            "internal server error",
            "Go back f**k you bitch"
        ];
        const err2 = Math.floor(Math.random() * err.length);
        res.status(500).send(err[err2]); // Fixed: use err[err2] and set proper status code
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});