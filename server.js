import express from "express";
import bodyParser from "body-parser";
import {rando, randoSequence} from '@nastyox/rando.js';
import fs from "fs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

const wordsData = fs.readFileSync("words.json", "utf-8");

const words = JSON.parse(wordsData);

var i = rando(0, 100);

let word = words[i].word.toUpperCase();

let hint = words[i].hint;

let scores = 0;

let slicedWord = randoSequence(word).join("");

app.get("/", (req, res) => {
    i = rando(0, 100)
    word = words[i].word.toUpperCase();
    slicedWord = randoSequence(word).join("");
    hint = words[i].hint
    res.render("index.ejs", {
        word: slicedWord,
        scores: scores,
        hint: hint
    })
})

app.post("/", (req, res) => {
    let answer = req.body.answer.toUpperCase();
    scores = 0;
    if (answer === word) {
        scores++
        i = rando(0, 100)
        word = words[i].word.toUpperCase();
        hint = words[i].hint
        res.render("index.ejs", {
            word: randoSequence(word).join(""),
            scores: scores,
            hint: hint
        })
    } else {
        scores = 0;
        res.render("index.ejs", {
            word: "Start new game :("
        })
        console.log(answer);
    }
})

app.listen(port, () => {
console.log(`Server running on port: ${port}`)
});