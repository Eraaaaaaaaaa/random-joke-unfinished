const express = require('express');
const cors = require('cors');
const app = express();

const port = 3768;

app.use(cors());

const randomJokes = [
    {
        joke: "Why don't skeletons fight each other? They don't have the guts.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHffmjaJu9V6G_JTPmzpzGyYH4Ng0Cd60Vw&s"
    },
    {
        joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTR7K6tQO62bM9EtLdjVWPXLC63rkhTqhsw&s"
    },
    {
        joke: "Why don't eggs tell jokes? They might crack up.",
        image: "https://bakerpedia.com/wp-content/uploads/2020/03/Egg_baking-ingredients-e1584136402126.jpg"
    },
    {
        joke: "I'm reading a book about anti-gravity. It's impossible to put down.",
        image: "https://media.istockphoto.com/id/495477978/photo/open-book.jpg?s=612x612&w=0&k=20&c=vwJ6__M7CVPdjkQFUv9j2pr7QJiQ9bWW_5jXjR9TcjY="
    },
    {
        joke: "I used to play piano by ear, but now I use my hands.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUT2yh9CH-bqg8hRFgsgaNozRHi7azCqKdhQ&s"
    }
];

app.get('/joke', (req, res) => {
    const randomJoke = randomJokes[Math.floor(Math.random() * randomJokes.length)];
    res.json(randomJoke);
});

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
