import express from 'express';

const app = express();

// Add this middleware to parse JSON request bodies
app.use(express.json());

app.post("/", (req, res) => {
    res.send(req.body); // Now this will return the JSON you send
});

app.listen(8080, () => {
    console.log("Server Started");
});
