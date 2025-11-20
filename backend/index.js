import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './db.js';
import Social from './models/socials.js';

const app = express();

const port = 8080;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json('You are connected to the server on port: ' + port)
})

app.get('/Socials', async (req, res) => {
    try {
    const socials = await Social.find({});
    res.status(200).json(socials);
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

app.post('/Socials', async (req, res) => {
    try {
        console.log(req.body)
        const social = await Social.create(req.body);
        res.status(200).json(social)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
})

app.listen(8080, () => {
    console.log(`Listening on port: ${port}`)
    connectDB()
})