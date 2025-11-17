import express from 'express';
import cors from 'cors';


const app = express();

const port = 8080;

app.use(cors())

app.get('/', (req, res) => {
    res.json('You are connected to the server on port: ' + port)
})

app.listen(8080, () => {
    console.log(`Listening on port: ${port}`)
})