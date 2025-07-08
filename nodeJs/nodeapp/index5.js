import express from 'express';

const app = express();

// Middleware function
const logger = (req, res, next) => {
    req.message = "Logger";
    next();
};

// Middleware not applied globally (commented out)
// app.use(logger);

app.get("/", (req, res) => {
    res.send(req.message); // ❌ Will send "undefined" because logger isn't used
});

app.get("/products", logger, (req, res) => {
    res.send(req.message); // ✅ Will send "Logger"
});

app.listen(8080, () => {
    console.log("Server started");
});
