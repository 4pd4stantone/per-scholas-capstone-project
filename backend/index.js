import express from 'express';

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.json('This is my backend server')
})

app.listen(8080, () => {
    console.log(`Listening on port: ${port}`)
})