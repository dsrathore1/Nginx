import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
    const headers = req.headers
    res.status(200).send(headers);
});

app.listen(PORT, () => {
    console.log(`Your site is running on http://localhost:${PORT}`)
});

